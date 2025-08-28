//Vert.x and Spring Boot comparison


package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(exclude = {
		DataSourceAutoConfiguration.class,  // disables automatic DB configuration
		HibernateJpaAutoConfiguration.class // disables Hibernate JPA config
})// @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan
@Configuration
@EnableAutoConfiguration
@ComponentScan
@Service  // (Business) @Service marks this class as a Spring-managed bean that can be injected anywhere.
@Component //Generic stereotype annotation.Marks a class as a Spring-managed bean. Can be used on any class.
@Repository //Specialization of @Component.Used in the DAO (Data Access Layer).Indicates that the class interacts with the database.
@RestController // @Controller + @ResponseBody
@Controller // (MVC) : Handles web requests and returns views
@ResponseBody
public class HelloWorldApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}

}