package com.project.budaya.Controller;

import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.budaya.Entity.User;
import com.project.budaya.Repository.UserRepository;
import com.project.budaya.Repository.PostsRepository;
import com.project.budaya.Repository.PostLikesRepo;

import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;
    private final PostLikesRepo postLikesRepo;

    public UserController(UserRepository userRepository,
                          PostsRepository postsRepository,
                          PostLikesRepo postLikesRepo) {
        this.userRepository = userRepository;
        this.postsRepository = postsRepository;
        this.postLikesRepo = postLikesRepo;
    }

    @GetMapping("/")
    public String beranda(HttpSession session, Model model) {
        model.addAttribute("posts", postsRepository.findAll());

        // Set of post IDs yang sudah di-like oleh user saat ini (untuk render hati merah di kartu)
        Set<Integer> likedPostIds = Collections.emptySet();
        User current = (User) session.getAttribute("currentUser");
        if (current != null) {
            likedPostIds = postLikesRepo.findByUser_Id(current.getId()).stream()
                .map(pl -> pl.getPost().getId())
                .collect(Collectors.toSet());
        }
        model.addAttribute("likedPostIds", likedPostIds);
        return "Beranda";
    }

    // Login & register memakai overlay di halaman, jadi GET ini cukup arahkan ke beranda
    @GetMapping("/login")
    public String loginpage() {
        return "redirect:/";
    }

    @GetMapping("/register")
    public String registerpage() {
        return "redirect:/";
    }

    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        HttpSession session,
                        RedirectAttributes ra) {
        User user = userRepository.findByEmailAndPassword(username, password);
        if (user != null) {
            session.setAttribute("currentUser", user);   // ingat user yang login
            ra.addFlashAttribute("authSuccess", "Selamat datang, " + user.getUsername() + "!");
            return "redirect:/";
        }
        ra.addFlashAttribute("authError", "Email atau password salah.");
        return "redirect:/";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user, HttpSession session, RedirectAttributes ra) {
        userRepository.save(user);
        session.setAttribute("currentUser", user);        // langsung login setelah daftar
        ra.addFlashAttribute("authSuccess", "Akun berhasil dibuat. Selamat datang, " + user.getUsername() + "!");
        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}
