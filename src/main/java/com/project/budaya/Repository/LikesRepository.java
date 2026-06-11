package com.project.budaya.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Likes;

public interface LikesRepository extends JpaRepository<Likes, Integer> {
    Optional<Likes> findByUser_IdAndThread_Id(Integer userId, Integer threadId);
}
