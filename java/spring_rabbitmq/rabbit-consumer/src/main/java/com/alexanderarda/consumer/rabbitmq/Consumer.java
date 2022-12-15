package com.alexanderarda.consumer.rabbitmq;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class Consumer {

    @RabbitListener(queues = "hello")
    public void listen(String message) {
        System.out.println("Consuming message = " + message);
    }

}
