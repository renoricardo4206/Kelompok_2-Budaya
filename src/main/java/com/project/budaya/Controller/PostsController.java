package com.project.budaya.Controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

import com.project.budaya.Entity.Categories;
import com.project.budaya.Entity.Posts;
import com.project.budaya.Entity.User;
import com.project.budaya.Repository.PostsRepository;
import com.project.budaya.Repository.CategoriesRepository;
import com.project.budaya.Repository.UserRepository;

@Controller
public class PostsController {

    private final PostsRepository postsRepository;
    private final CategoriesRepository categoriesRepository;
    private final UserRepository userRepository;

    public PostsController(PostsRepository postsRepository,
                           CategoriesRepository categoriesRepository,
                           UserRepository userRepository) {
        this.postsRepository = postsRepository;
        this.categoriesRepository = categoriesRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/dokumentasi")
    public String dokumentasi(@RequestParam(required = false) String cat, Model model) {
        boolean semua = (cat == null || cat.isBlank() || cat.equalsIgnoreCase("semua"));

        model.addAttribute("posts",
                semua ? postsRepository.findAll()
                      : postsRepository.findByCategory_NameIgnoreCase(cat));
        model.addAttribute("categories", categoriesRepository.findAll());
        model.addAttribute("activeCat", semua ? "semua" : cat);
        return "Dokumentasi";
    }

    @GetMapping("/dokumentasi/{id}")
    public String dokumentasiDetail(@PathVariable Integer id, Model model) {
        Posts post = postsRepository.findById(id).orElse(null);
        if (post == null) {
            return "redirect:/dokumentasi";
        }

        // Dokumentasi terkait: kategori sama, kecuali post ini sendiri
        List<Posts> related = new ArrayList<>();
        if (post.getCategory() != null) {
            related = postsRepository.findByCategory_NameIgnoreCase(post.getCategory().getName());
            related.removeIf(p -> p.getId().equals(post.getId()));
        }

        int likeCount = (post.getPostLikes() != null) ? post.getPostLikes().size() : 0;

        model.addAttribute("post", post);
        model.addAttribute("related", related);
        model.addAttribute("likeCount", likeCount);
        model.addAttribute("categories", categoriesRepository.findAll());
        return "DokumentasiDetail";
    }

    @PostMapping("/dokumentasi/upload")
    public String uploadDokumentasi(
            @RequestParam String title,
            @RequestParam Integer categoryId,
            @RequestParam String content,
            @RequestParam(required = false) MultipartFile image,
            HttpSession session,
            RedirectAttributes ra) {

        // Gerbang: harus login dulu
        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("uploadError", "Silakan login atau daftar dulu untuk mengupload konten.");
            return "redirect:/dokumentasi";
        }

        Categories category = categoriesRepository.findById(categoryId).orElse(null);
        if (category == null) {
            ra.addFlashAttribute("uploadError", "Kategori tidak ditemukan.");
            return "redirect:/dokumentasi";
        }

        // Simpan gambar (jika ada) ke folder uploads/
        String mediaUrl = null;
        if (image != null && !image.isEmpty()) {
            try {
                String original = image.getOriginalFilename();
                String ext = (original != null && original.contains("."))
                        ? original.substring(original.lastIndexOf('.'))
                        : "";
                String filename = System.currentTimeMillis() + ext;

                Path uploadDir = Paths.get("uploads");
                Files.createDirectories(uploadDir);
                Files.copy(image.getInputStream(), uploadDir.resolve(filename),
                        StandardCopyOption.REPLACE_EXISTING);

                mediaUrl = "/uploads/" + filename;
            } catch (IOException e) {
                ra.addFlashAttribute("uploadError", "Gagal menyimpan gambar: " + e.getMessage());
                return "redirect:/dokumentasi";
            }
        }

        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("d MMM yyyy"));
        postsRepository.save(new Posts(user, category, title, content, mediaUrl, now));

        ra.addFlashAttribute("uploadSuccess", "Konten berhasil diupload!");
        return "redirect:/dokumentasi";
    }
}