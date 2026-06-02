package com.project.budaya.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Forums;

public interface ForumsRepository extends JpaRepository<Forums, Integer> {
    
}
