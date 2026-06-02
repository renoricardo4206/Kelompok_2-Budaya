package com.project.budaya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Likes;
public interface LikesRepository extends JpaRepository<Likes, Integer> {
    
}
