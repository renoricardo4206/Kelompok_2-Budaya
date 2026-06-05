package com.project.budaya.Entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Table(name = "threads")
public class Threads {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "forum_id", nullable = false)
    private Forums forum;

    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String createdAt;
    private String mediaURL;

    @JsonIgnore
    @OneToMany(mappedBy = "thread", cascade = CascadeType.ALL)
    private List<Comments> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "thread", cascade = CascadeType.ALL)
    private List<Likes> likes;

    public Threads() {}

    public Threads(User user, Forums forum, String title, String content, String createdAt, String mediaURL) {
        this.user = user;
        this.forum = forum;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.mediaURL = mediaURL;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Forums getForum() { return forum; }
    public void setForum(Forums forum) { this.forum = forum; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getCreatedAt() { return createdAt; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
    public List<Comments> getComments() { return comments; }
    public void setComments(List<Comments> comments) { this.comments = comments; }
    public List<Likes> getLikes() { return likes; }
    public void setLikes(List<Likes> likes) { this.likes = likes; }
    public String getMediaURL() { return mediaURL; }
    public void setMediaURL(String mediaURL) { this.mediaURL = mediaURL; }
}