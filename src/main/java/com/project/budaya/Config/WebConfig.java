package com.project.budaya.Config;

import java.nio.file.Paths;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Menyajikan file yang di-upload user (gambar thread & dokumentasi) dari folder
 * "uploads/" di root project. Tanpa ini, URL /uploads/xxx.png tidak akan
 * ditemukan karena Spring Boot default hanya melayani static dari classpath.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Path absolut ke folder uploads/ supaya konsisten di mana pun app dijalankan
        String uploadPath = Paths.get("uploads").toAbsolutePath().toUri().toString();

        registry.addResourceHandler("/uploads/**")
                .addResourceLocations(uploadPath);
    }
}
