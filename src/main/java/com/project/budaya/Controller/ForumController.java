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

import com.project.budaya.Entity.Comments;
import com.project.budaya.Entity.Forums;
import com.project.budaya.Entity.Likes;
import com.project.budaya.Entity.Threads;
import com.project.budaya.Entity.User;
import com.project.budaya.Repository.CommentsRepository;
import com.project.budaya.Repository.ForumsRepository;
import com.project.budaya.Repository.LikesRepository;
import com.project.budaya.Repository.ThreadsRepository;
import com.project.budaya.Repository.UserRepository;

@Controller
public class ForumController {

    private final ForumsRepository forumsRepository;
    private final ThreadsRepository threadsRepository;
    private final CommentsRepository commentsRepository;
    private final UserRepository userRepository;
    private final LikesRepository likesRepository;

    public ForumController(ForumsRepository forumsRepository,
                           ThreadsRepository threadsRepository,
                           CommentsRepository commentsRepository,
                           UserRepository userRepository,
                           LikesRepository likesRepository) {
        this.forumsRepository = forumsRepository;
        this.threadsRepository = threadsRepository;
        this.commentsRepository = commentsRepository;
        this.userRepository = userRepository;
        this.likesRepository = likesRepository;
    }

    private String now() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("d MMM yyyy, HH:mm"));
    }

    @GetMapping("/forum")
    public String forum(@RequestParam(required = false) String forum, Model model) {
        boolean semua = (forum == null || forum.isBlank() || forum.equalsIgnoreCase("semua"));

        model.addAttribute("forums", forumsRepository.findAll());
        model.addAttribute("threads",
                semua ? threadsRepository.findAll()
                      : threadsRepository.findByForum_NameIgnoreCase(forum));
        model.addAttribute("activeForum", semua ? "semua" : forum);
        return "Forum";
    }

    @GetMapping("/forum/{id}")
    public String forumDetail(@PathVariable Integer id, HttpSession session, Model model) {
        Threads thread = threadsRepository.findById(id).orElse(null);
        if (thread == null) {
            return "redirect:/forum";
        }

        // Thread terkait: forum sama, kecuali thread ini
        List<Threads> related = new ArrayList<>();
        if (thread.getForum() != null) {
            related = threadsRepository.findByForum_NameIgnoreCase(thread.getForum().getName());
            related.removeIf(t -> t.getId().equals(thread.getId()));
        }

        boolean userLiked = false;
        User current = (User) session.getAttribute("currentUser");
        if (current != null) {
            userLiked = likesRepository.findByUser_IdAndThread_Id(current.getId(), thread.getId()).isPresent();
        }

        model.addAttribute("thread", thread);
        model.addAttribute("comments", thread.getComments());
        model.addAttribute("related", related);
        model.addAttribute("commentCount", thread.getComments() != null ? thread.getComments().size() : 0);
        model.addAttribute("likeCount", thread.getLikes() != null ? thread.getLikes().size() : 0);
        model.addAttribute("userLiked", userLiked);
        model.addAttribute("forums", forumsRepository.findAll());
        return "ForumDetail";
    }

    @PostMapping("/forum/{id}/like")
    public String toggleLikeThread(@PathVariable Integer id,
                                   HttpSession session,
                                   RedirectAttributes ra) {
        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("flashError", "Silakan login atau daftar dulu untuk mendukung thread.");
            return "redirect:/forum/" + id;
        }
        Threads thread = threadsRepository.findById(id).orElse(null);
        if (thread == null) return "redirect:/forum";

        likesRepository.findByUser_IdAndThread_Id(user.getId(), thread.getId()).ifPresentOrElse(
            existing -> {
                likesRepository.delete(existing);
            },
            () -> {
                likesRepository.save(new Likes(user, thread, now()));
            }
        );
        return "redirect:/forum/" + id;
    }

    @PostMapping("/forum/{id}/comment")
    public String addComment(@PathVariable Integer id,
                             @RequestParam String content,
                             HttpSession session,
                             RedirectAttributes ra) {
        Threads thread = threadsRepository.findById(id).orElse(null);
        if (thread == null) {
            return "redirect:/forum";
        }

        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("flashError", "Silakan login atau daftar dulu untuk membalas.");
            return "redirect:/forum/" + id;
        }

        commentsRepository.save(new Comments(user, thread, content, now()));
        ra.addFlashAttribute("flashSuccess", "Balasan terkirim!");
        return "redirect:/forum/" + id;
    }

    @GetMapping("/threads/create")
    public String createThreadForm(HttpSession session, Model model, RedirectAttributes ra) {
        // Gerbang: harus login dulu sebelum membuka form buat thread
        if (session.getAttribute("currentUser") == null) {
            ra.addFlashAttribute("flashError", "Silakan login atau daftar dulu untuk membuat thread.");
            return "redirect:/forum";
        }
        model.addAttribute("forums", forumsRepository.findAll());
        return "BuatThreadBaru";
    }

    @PostMapping("/threads/create")
    public String createThread(@RequestParam String title,
                               @RequestParam Integer forumId,
                               @RequestParam String content,
                               @RequestParam(required = false) MultipartFile image,
                               HttpSession session,
                               RedirectAttributes ra) {
        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("flashError", "Silakan login atau daftar dulu untuk membuat thread.");
            return "redirect:/forum";
        }

        Forums forum = forumsRepository.findById(forumId).orElse(null);
        if (forum == null) {
            ra.addFlashAttribute("flashError", "Forum tidak ditemukan.");
            return "redirect:/threads/create";
        }

        String mediaUrl = saveImage(image, ra, "/threads/create");
        if (mediaUrl != null && mediaUrl.equals("__error__")) {
            return "redirect:/threads/create";
        }

        Threads saved = threadsRepository.save(
                new Threads(user, forum, title, content, now(), mediaUrl));
        return "redirect:/forum/" + saved.getId();
    }

    @GetMapping("/threads/{id}/edit")
    public String editThreadForm(@PathVariable Integer id,
                                 HttpSession session,
                                 Model model,
                                 RedirectAttributes ra) {
        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("flashError", "Silakan login dulu untuk mengedit thread.");
            return "redirect:/forum";
        }
        Threads thread = threadsRepository.findById(id).orElse(null);
        if (thread == null) {
            return "redirect:/forum";
        }
        if (thread.getUser() == null || !thread.getUser().getId().equals(user.getId())) {
            ra.addFlashAttribute("flashError", "Anda tidak punya akses untuk mengedit thread ini.");
            return "redirect:/forum/" + id;
        }
        model.addAttribute("thread", thread);
        model.addAttribute("forums", forumsRepository.findAll());
        return "BuatThreadBaru";
    }

    @PostMapping("/threads/{id}/update")
    public String updateThread(@PathVariable Integer id,
                               @RequestParam String title,
                               @RequestParam Integer forumId,
                               @RequestParam String content,
                               @RequestParam(required = false) MultipartFile image,
                               @RequestParam(required = false, defaultValue = "false") boolean removeImage,
                               HttpSession session,
                               RedirectAttributes ra) {
        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("flashError", "Silakan login dulu.");
            return "redirect:/forum";
        }
        Threads thread = threadsRepository.findById(id).orElse(null);
        if (thread == null) return "redirect:/forum";
        if (thread.getUser() == null || !thread.getUser().getId().equals(user.getId())) {
            ra.addFlashAttribute("flashError", "Anda tidak punya akses untuk mengubah thread ini.");
            return "redirect:/forum/" + id;
        }

        Forums forum = forumsRepository.findById(forumId).orElse(null);
        if (forum == null) {
            ra.addFlashAttribute("flashError", "Forum tidak ditemukan.");
            return "redirect:/threads/" + id + "/edit";
        }

        thread.setTitle(title);
        thread.setContent(content);
        thread.setForum(forum);

        if (image != null && !image.isEmpty()) {
            // Ada gambar baru → ganti
            String mediaUrl = saveImage(image, ra, "/threads/" + id + "/edit");
            if (mediaUrl != null && mediaUrl.equals("__error__")) {
                return "redirect:/threads/" + id + "/edit";
            }
            thread.setMediaURL(mediaUrl);
        } else if (removeImage) {
            // User hapus gambar tanpa pengganti → kosongkan
            thread.setMediaURL(null);
        }
        // else: tidak ada perubahan gambar → pertahankan yang lama

        threadsRepository.save(thread);
        ra.addFlashAttribute("flashSuccess", "Thread berhasil diperbarui!");
        return "redirect:/forum/" + id;
    }

    @PostMapping("/threads/{id}/delete")
    public String deleteThread(@PathVariable Integer id,
                               HttpSession session,
                               RedirectAttributes ra) {
        User user = (User) session.getAttribute("currentUser");
        if (user == null) {
            ra.addFlashAttribute("flashError", "Silakan login dulu.");
            return "redirect:/forum";
        }
        Threads thread = threadsRepository.findById(id).orElse(null);
        if (thread == null) return "redirect:/forum";
        if (thread.getUser() == null || !thread.getUser().getId().equals(user.getId())) {
            ra.addFlashAttribute("flashError", "Anda tidak punya akses untuk menghapus thread ini.");
            return "redirect:/forum/" + id;
        }
        threadsRepository.delete(thread);
        ra.addFlashAttribute("flashSuccess", "Thread berhasil dihapus.");
        return "redirect:/forum";
    }

    /* Helper: simpan file gambar ke folder uploads/. Return URL atau "__error__" kalau gagal. */
    private String saveImage(MultipartFile image, RedirectAttributes ra, String redirectOnError) {
        if (image == null || image.isEmpty()) return null;
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
            return "/uploads/" + filename;
        } catch (IOException e) {
            ra.addFlashAttribute("flashError", "Gagal menyimpan gambar: " + e.getMessage());
            return "__error__";
        }
    }
}
