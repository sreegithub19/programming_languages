# Spring Boot x RabbitMQ - Produce & Consume Messages Example

Spring boot project example in very simply way for `produce & consume message` using  `spring-boot-starter-amqp` library without database and any others dependencies. Just being simplest one!

You can read the whole tutorial https://alexanderarda.medium.com/rabbitmq-publish-consume-menggunakan-spring-boot-cab3c899167b (in Bahasa)


## Pre-requisitions
Create new queue in your RabbitMQ and give it a name `hello`

## :rocket: Spring Project #1 - Produce Message

#### Main Method

```java
public void run(String... args) throws Exception {  

  for(int i=0;i<10;i++){  
  	// create random message
  	double rand = Math.random();  
        producer.sendMessage("This is message " + rand);  
        System.out.println("Sent = "+rand);  
    }  
    
}
``` 

#### Produce/Publishing Message Method

```java
@Autowired  
private RabbitTemplate rabbitTemplate;  
  
public void sendMessage(String message) {  
	// routing key = "hello"  
	rabbitTemplate.convertAndSend("hello", message);  
}
``` 


## :rocket: Spring Project #2 - Consume Message
#### Consume Method

```java
@RabbitListener(queues = "hello")  
public void listen(String message) {  
  System.out.println("Consuming message = " + message);  
}
``` 

## Maven Dependency
```xml
<dependency>  
 <groupId>org.springframework.boot</groupId>  
 <artifactId>spring-boot-starter-amqp</artifactId>  
</dependency>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

