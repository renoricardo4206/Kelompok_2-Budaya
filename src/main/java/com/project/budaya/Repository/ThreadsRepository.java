package com.project.budaya.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Threads;

public interface ThreadsRepository extends JpaRepository<Threads, Integer> {

    List<Threads> findByForum_NameIgnoreCase(String name);
}
