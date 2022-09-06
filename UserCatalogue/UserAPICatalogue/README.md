# UserAPICatalogue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Angular Services
Those services are a central point where we can define bunch of functionalities that many parts of the application will use it. So, instead of putting one functionality in many components, one can define one location where  all of these functionalities can be placed and when needed one just need to inject them on that specific component. In short, Service is used to fetch data, pass data to different components/classes by just injecting the services from service class  (calling the functions from the service class). They are just used to centralize similar functionalities that you can share across different components.
