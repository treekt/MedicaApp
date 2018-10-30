package pl.treekt.medica.visit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class VisitServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(VisitServiceApplication.class, args);
    }
}
