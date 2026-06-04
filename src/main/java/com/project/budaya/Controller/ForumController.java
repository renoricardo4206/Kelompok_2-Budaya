package com.project.budaya.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.project.budaya.Repository.ForumsRepository;
import com.project.budaya.Repository.ThreadsRepository;

@Controller
public class ForumController {

    private final ForumsRepository forumsRepository;
    private final ThreadsRepository threadsRepository;

    public ForumController(ForumsRepository forumsRepository, ThreadsRepository threadsRepository) {
        this.forumsRepository = forumsRepository;
        this.threadsRepository = threadsRepository;
    }

    @GetMapping("/forum")
    public String forum(Model model) {
        model.addAttribute("forums", forumsRepository.findAll());
        model.addAttribute("threads", threadsRepository.findAll());
        return "Forum";
    }

    @GetMapping("/forum/{id}")
    public String forumDetail(@PathVariable Integer id, Model model) {
        model.addAttribute("threads", threadsRepository.findAll());
        return "ForumDetail";
    }
}