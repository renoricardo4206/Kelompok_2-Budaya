package com.project.budaya.Entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Table(name = "forums")
public class Forums {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "forum", cascade = CascadeType.ALL)
    private List<Threads> threads;

    public Forums() {}

    public Forums(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public List<Threads> getThreads() { return threads; }
    public void setThreads(List<Threads> threads) { this.threads = threads; }
}