package com.project.budaya.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.project.budaya.Repository.PostsRepository;
import com.project.budaya.Repository.CategoriesRepository;

@Controller
public class PostsController {

    private final PostsRepository postsRepository;
    private final CategoriesRepository categoriesRepository;

    public PostsController(PostsRepository postsRepository, CategoriesRepository categoriesRepository) {
        this.postsRepository = postsRepository;
        this.categoriesRepository = categoriesRepository;
    }

    @GetMapping("/dokumentasi")
    public String dokumentasi(Model model) {
        model.addAttribute("posts", postsRepository.findAll());
        model.addAttribute("categories", categoriesRepository.findAll());
        return "Dokumentasi";
    }

    @GetMapping("/dokumentasi/{id}")
    public String dokumentasiDetail(@PathVariable Integer id, Model model) {
        model.addAttribute("post", postsRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Post tidak ditemukan: " + id)));
        return "DokumentasiDetail";
    }
}