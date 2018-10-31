package pl.treekt.medica.archive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ArchiveServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ArchiveServiceApplication.class, args);
    }
}
