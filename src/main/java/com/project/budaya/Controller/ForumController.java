package com.project.budaya.Controller;

import com.project.budaya.Entity.Threads;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/api/threads")
    @ResponseBody
    public List<Threads> getAllThreads() {
    return threadsRepository.findAll();
    }

    @GetMapping("/api/threads/{id}")
    @ResponseBody
    public ResponseEntity<Threads> getThreadById(@PathVariable Integer id) {
    return threadsRepository.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
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