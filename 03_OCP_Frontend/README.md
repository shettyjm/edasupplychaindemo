# RPDLogistica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

# Build and Deploy to OpenShift Cluster

 1. Create a new project for the application.

  E.g 

   oc new-project scdemoproject

 2. oc new-app --name scdemofeapp  https://github.com/shettyjm/edasupplychaindemo  --context-dir 03_OCP_Frontend
    
    oc logs -f buildconfig/scdemofeapp
    
    oc expose service/scdemofeapp 
    
    oc get deployment
    
    oc set env deployment/scdemofeapp BACKEND_SC_API_URL="https://quarkus-kafka-quarkus-test.apps.rosa-xxx.xxx.xx.openshiftapps.com"

3. Launch  FE application using the `Topology` side menu, route option.
   Click on the `Login` button on the UI application.
   Login credentials `orderadmin/password`


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
# wow-logistica
