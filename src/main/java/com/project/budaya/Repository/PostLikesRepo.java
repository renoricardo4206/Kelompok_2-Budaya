package com.project.budaya.Repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.PostLikes;

public interface PostLikesRepo extends JpaRepository<PostLikes, Integer> {
    Optional<PostLikes> findByUser_IdAndPost_Id(Integer userId, Integer postId);
    List<PostLikes> findByUser_Id(Integer userId);
}