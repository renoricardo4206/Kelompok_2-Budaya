package com.project.budaya.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Posts;


public interface PostsRepository extends JpaRepository<Posts, Integer> {

    // Ambil semua post berdasarkan nama kategori (tidak peduli huruf besar/kecil)
    List<Posts> findByCategory_NameIgnoreCase(String name);
}
