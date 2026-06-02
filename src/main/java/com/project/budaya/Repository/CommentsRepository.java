package com.project.budaya.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Comments;

public interface CommentsRepository extends JpaRepository<Comments, Integer> {
    
}
