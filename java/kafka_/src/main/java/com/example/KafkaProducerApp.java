package com.example;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.Properties;

public class KafkaProducerApp {
    public static void main(String[] args) {
        String topic = "example-topic";
        String key = "key1";
        String value = "Hello, Kafka!";

        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        KafkaProducer<String, String> producer = new KafkaProducer<>(props);

        try {
            producer.send(new ProducerRecord<>(topic, key, value));
            System.out.println("Message sent: " + key + " -> " + value);
        } finally {
            producer.close();
        }
    }
}