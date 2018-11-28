package pl.treekt.medica.auth.Configuration;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;


@Configuration
public class RestTemplateConfiguration {

    // Create a bean for restTemplate to call services
    @Bean
    @LoadBalanced        // Load balance between service instances running at different ports.
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}