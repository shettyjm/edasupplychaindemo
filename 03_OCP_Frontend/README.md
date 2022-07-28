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


## Build locally

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# RPDlogistica
