package com.project.budaya.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.project.budaya.Entity.Threads;
import com.project.budaya.Repository.ThreadsRepository;
import com.project.budaya.Repository.ForumsRepository;
import com.project.budaya.Repository.UserRepository;

@Controller
@RequestMapping("/threads")
public class ThreadsController {
    private final ThreadsRepository threadsRepository;
    private final ForumsRepository forumsRepository;
    private final UserRepository userRepository;

    public ThreadsController(ThreadsRepository threadsRepository, ForumsRepository forumsRepository, UserRepository userRepository) {
        this.threadsRepository = threadsRepository;
        this.forumsRepository = forumsRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public String getAllThreads(Model model) {
        model.addAttribute("threads", threadsRepository.findAll());
        return "threads";
    }

    @GetMapping("/{id}")
    public String getThreadById(@PathVariable Integer id, Model model) {
        Threads thread = threadsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid thread Id:" + id));
        model.addAttribute("thread", thread);
        return "thread-detail";
    }

    @GetMapping("/create")
    public String createThreadForm(Model model) {
        model.addAttribute("thread", new Threads());
        model.addAttribute("forums", forumsRepository.findAll());
        return "create-thread";
    }

    @PostMapping("/create")
    public String createThread(@RequestParam String title, @RequestParam String content, @RequestParam Integer forumId, @RequestParam Integer userId, @RequestParam(required = false) String mediaURL) {
        Threads thread = new Threads();
        thread.setTitle(title);
        thread.setContent(content);
        thread.setCreatedAt(java.time.LocalDateTime.now().toString());
        thread.setMediaURL(mediaURL);
        thread.setForum(forumsRepository.findById(forumId).orElseThrow(() -> new IllegalArgumentException("Invalid forum Id:" + forumId)));
        thread.setUser(userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + userId)));
        threadsRepository.save(thread);
        return "redirect:/threads";
    }
}

