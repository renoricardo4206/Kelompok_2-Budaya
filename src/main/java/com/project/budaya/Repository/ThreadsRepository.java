package com.project.budaya.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Threads;

public interface ThreadsRepository extends JpaRepository<Threads, Integer> {
    
}
