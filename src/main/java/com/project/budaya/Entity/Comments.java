package com.project.budaya.Entity;

import jakarta.persistence.*;


@Entity
@Table(name = "comments")
public class Comments{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "thread_id", nullable = false)
    private Threads thread;

    @Column(columnDefinition = "TEXT")
    private String content;
    private String createdAt;

    public Comments() {
    }

    public Comments(User user, Threads thread, String content, String createdAt) {
        this.user = user;
        this.thread = thread;
        this.content = content;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Threads getThread() {
        return thread;
    }

    public void setThread(Threads thread) {
        this.thread = thread;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
