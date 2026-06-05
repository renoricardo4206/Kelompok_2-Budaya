package com.project.budaya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.budaya.Entity.Categories;

public interface CategoriesRepository extends JpaRepository<Categories, Integer> {
    Categories findByNameIgnoreCase(String name);
}