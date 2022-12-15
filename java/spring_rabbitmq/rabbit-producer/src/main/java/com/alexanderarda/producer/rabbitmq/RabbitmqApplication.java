package com.alexanderarda.producer.rabbitmq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RabbitmqApplication implements CommandLineRunner {

    @Autowired
    Producer producer;

    public static void main(String[] args) {
        SpringApplication.run(RabbitmqApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        for(int i=0;i<10;i++){

            double rand = Math.random();
            producer.sendMessage("This is message " + rand);
            System.out.println("Sent = "+rand);

        }
    }
}
