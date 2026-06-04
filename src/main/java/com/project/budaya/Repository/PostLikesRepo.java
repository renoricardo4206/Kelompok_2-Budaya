package com.project.budaya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.PostLikes;

public interface PostLikesRepo extends JpaRepository<PostLikes, Integer> {
    
}