# app-three-service

Simple Java microservice that uses [MicroProfile](https://microprofile.io/) and is built with 
[Payara Micro](https://www.payara.fish/software/payara-server/payara-micro/). There is a single endpoint that returns a list of `Widget` objects. 

It is part of `micro-frontends-demo`; see the [main README](../README.md) for details about the entire project. 


## Installation

Make sure you have [Java Developer's Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 8 or higher 
and [Apache Maven](https://maven.apache.org/download.cgi) installed.


## Building

Execute this command to build an executable JAR file containing the app:

    mvn clean package

This will create the executable jar file `app-three-service-microbundle.jar` within the `target` folder. 

## Running

You can run the app with this command:

    java -jar target/app-three-service-microbundle.jar

To launch the test page, open your browser at the following URL:

    http://localhost:8080/index.html

## Additional features

In addition to the widgets endpoint, this app also uses a custom `CorsFilter` in order to support 
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), and has simple examples of using health checks and metrics.

