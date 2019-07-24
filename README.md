# Naskar UI Sample

Sample application using [nk-ui](https://github.com/naskarlab/nk-ui). Coding just with Java to create web applications.

## Transpilers

The basic concept is create components using directly DOM API on client-side, but coding just with Java and to use the transpiler to convert the Java code into JavaScript code. In this project, we're using the JSweet Transpiler.

![UI](/docs/nk-ui-sample_login.png)

## Try using Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#snapshot/f9ce1083-5a3f-40d6-92e2-af9038faaabb)

```
mvn clean generate-sources install exec:java
```