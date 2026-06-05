package com.project.budaya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.project.budaya.Entity.Posts;
import com.project.budaya.Entity.Categories;
import java.util.List;

public interface PostsRepository extends JpaRepository<Posts, Integer> {
    
    // Find all with pagination
    Page<Posts> findAll(Pageable pageable);
    
    // Find by category with pagination
    Page<Posts> findByCategory(Categories category, Pageable pageable);
    
    // Find by category (tanpa pagination)
    List<Posts> findByCategory(Categories category);
}