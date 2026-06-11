package com.project.budaya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.PostComments;

public interface PostCommentsRepository extends JpaRepository<PostComments, Integer> {
}
