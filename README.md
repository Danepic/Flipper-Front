# Flipper Front

Client da aplicação Flipper.

### Stack
 - Typescript
 - Angular 9
 - HTML
 - CSS
 - Materialize
 - Angular2 Materialize
 - Firebase

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Build Tool:
Maven v3.6.1

#### Database:
Firebase

#### External Services:
 - NBNA-API (Heroku)
 - Flipper Login (Heroku)
 - Flipper Cash (Heroku)
 
#### MicroServices
 - ##### Game Service
Para adicionar nesse serviço, você precisa ter uma conta registrada como administrador. Para criar essas contas 
de administrador voce precisa ter login na API LoginIn e ter seu cadastro na Firebase Rule do projeto Core.
 
#### Environment:
N/A

#### CI:
N/A

#### Dependencies Versions:
```sh
        <java.version>11</java.version>
        <spring-cloud.version>Hoxton.SR1</spring-cloud.version>
        <commons-validator.version>1.6</commons-validator.version>
        <mapstruct.version>1.3.1.Final</mapstruct.version>
        <jackson.version>2.10.0</jackson.version>
        <swagger.version>2.9.2</swagger.version>
        <firebase.version>3.0.3</firebase.version>
        <alternate-feign.version>10.7.0</alternate-feign.version>
        <gson.version>2.8.6</gson.version>
        <version>2.2.4.RELEASE</version>
```