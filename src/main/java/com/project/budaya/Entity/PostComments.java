package com.project.budaya.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "post_comments")
public class PostComments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Posts post;

    @Column(columnDefinition = "TEXT")
    private String content;
    private String createdAt;

    public PostComments() {
    }

    public PostComments(User user, Posts post, String content, String createdAt) {
        this.user = user;
        this.post = post;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Posts getPost() { return post; }
    public void setPost(Posts post) { this.post = post; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getCreatedAt() { return createdAt; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
}
