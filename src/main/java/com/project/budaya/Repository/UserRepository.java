package com.project.budaya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.budaya.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}