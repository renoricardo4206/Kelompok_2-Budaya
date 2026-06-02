package com.project.budaya.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Posts;


public interface PostsRepository extends JpaRepository<Posts, Integer> {
    
}
