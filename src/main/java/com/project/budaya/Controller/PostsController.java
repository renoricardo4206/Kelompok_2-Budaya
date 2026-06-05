package com.project.budaya.Controller;

import com.project.budaya.Repository.UserRepository;
import com.project.budaya.Repository.PostsRepository;
import com.project.budaya.Repository.CategoriesRepository;
import com.project.budaya.Entity.Posts;
import com.project.budaya.Entity.Categories;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class PostsController {

    private final UserRepository userRepository;
    private final PostsRepository postsRepository;
    private final CategoriesRepository categoriesRepository;

    public PostsController(PostsRepository postsRepository, 
                           CategoriesRepository categoriesRepository, 
                           UserRepository userRepository) {
        this.postsRepository = postsRepository;
        this.categoriesRepository = categoriesRepository;
        this.userRepository = userRepository;
    }

    
    @GetMapping("/dokumentasi")
    public String dokumentasi(@RequestParam(required = false) String cat, Model model) {
        List<Posts> posts;
        String activeCategory = "Semua";
        
        try {
            // Batasi hanya 20 data per halaman untuk menghindari timeout
            Pageable pageable = PageRequest.of(0, 20);
            
            if (cat != null && !"semua".equalsIgnoreCase(cat) && cat.trim().length() > 0) {
                // Filter berdasarkan kategori
                Categories category = categoriesRepository.findByNameIgnoreCase(cat);
                if (category != null) {
                    posts = postsRepository.findByCategory(category, pageable).getContent();
                    activeCategory = cat;
                } else {
                    posts = postsRepository.findAll(pageable).getContent();
                    activeCategory = "Semua";
                }
            } else {
                posts = postsRepository.findAll(pageable).getContent();
                activeCategory = "Semua";
            }
            
            // Potong content untuk tampilan card (max 150 karakter)
            for (Posts post : posts) {
                if (post.getContent() != null && post.getContent().length() > 150) {
                    post.setContent(post.getContent().substring(0, 150) + "...");
                }
            }
            
        } catch (Exception e) {
            // Jika error, ambil data tanpa pagination
            posts = postsRepository.findAll().stream().limit(10).collect(Collectors.toList());
            e.printStackTrace();
        }
        
        List<Categories> allCategories = categoriesRepository.findAll();
        
        model.addAttribute("posts", posts);
        model.addAttribute("categories", allCategories);
        model.addAttribute("activeCategory", activeCategory);
        model.addAttribute("totalPosts", posts.size());
        
        return "Dokumentasi";
    }

    
    @GetMapping("/dokumentasi/{id}")
    public String dokumentasiDetail(@PathVariable Integer id, Model model) {
        Posts post = postsRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Dokumentasi tidak ditemukan dengan id : " + id));
        
        model.addAttribute("post", post);
        
        // Ambil 5 dokumentasi lain untuk rekomendasi
        List<Posts> otherPosts = postsRepository.findAll().stream()
            .filter(p -> !p.getId().equals(id))
            .limit(5)
            .collect(Collectors.toList());
        
        model.addAttribute("otherPosts", otherPosts);
        
        return "DokumentasiDetail";
    }
    
    
    @PostMapping("/dokumentasi/upload")
    public String uploadDokumentasi(@RequestParam String title,
                                   @RequestParam String category,
                                   @RequestParam String description,
                                   @RequestParam(required = false) String imageUrl,
                                   Model model) {
        
        try {
            Categories existingCategory = categoriesRepository.findByNameIgnoreCase(category);
            if (existingCategory == null) {
                existingCategory = new Categories(category);
                categoriesRepository.save(existingCategory);
            }
            
            Posts post = new Posts();
            post.setTitle(title);
            post.setContent(description);
            post.setMedia_url(imageUrl);
            post.setCategory(existingCategory);
            post.setCreatedAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
            
            // TODO: Set user dari session/login
            // post.setUser(currentUser);
            
            postsRepository.save(post);
            
            model.addAttribute("successMessage", "Dokumentasi berhasil diunggah!");
        } catch (Exception e) {
            model.addAttribute("errorMessage", "Gagal mengunggah dokumentasi: " + e.getMessage());
        }
        
        return "redirect:/dokumentasi";
    }
}