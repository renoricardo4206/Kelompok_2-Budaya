package com.project.budaya.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.project.budaya.Entity.User;
import com.project.budaya.Repository.UserRepository;

@Controller
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @GetMapping("/")
    public String beranda() {
        return "Beranda";
    }

    @GetMapping("/login")
    public String loginpage(){
        return "login";
    }
    

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password, Model model) {
        User user = userRepository.findByEmailAndPassword(username, password);
        if (user != null) {
            model.addAttribute("user", user);
            return "redirect:/home";
        } else {
            model.addAttribute("error", "Invalid Email or password");
            return "login";
        }
    }

    @GetMapping("/register")
    public String registerpage() {
        return "register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user) {
        userRepository.save(user);
        return "redirect:/login";
    }
}