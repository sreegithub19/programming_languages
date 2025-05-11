package com.example.kafka;

import org.apache.kafka.clients.producer.*;
import java.util.Properties;

public class ProducerExample {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        try (KafkaProducer<String, String> producer = new KafkaProducer<>(props)) {
            for (int i = 0; i < 5; i++) {
                String key = "key-" + i;
                String value = "value-" + i;
                producer.send(new ProducerRecord<>("test-topic", key, value));
            }
        }

        System.out.println("Messages sent.");
    }
}
