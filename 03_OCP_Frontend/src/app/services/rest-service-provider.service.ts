import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { KeycloakService } from 'keycloak-angular';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
//import { City } from 'src/models/cities';
//import { Employee } from 'src/models/employees';

import { Order } from 'src/models/orders';

@Injectable({
  providedIn: 'root'
})
export class RestServiceProviderService {

  rootURL: string;
  //cityRootUrl: string;
  orderBackendUrl: string;

  headers = new HttpHeaders()
  //.set('content-type', 'application/json')
  //.set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {
    this.rootURL = environment.API_GW_URL;
   
    this.orderBackendUrl = environment.BACKEND_SC_API_URL;
    //" http://localhost:3000"


  }



  // getCities(): Observable<[City]> {
  //   console.log("get cities from backend");
  //   return this.http.get<[City]>(`${this.cityRootUrl}/cityrankings?user_key=905fe060a3084ce5731f16609dd47239`,{ headers: this.headers })
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // getCORSCities(): Observable<[City]> {
  //   console.log("get cities from backend");
  //   return this.http.get<[City]>(`${this.cityBackendUrl}/cityrankings`)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  getOrders(token: string): Observable<[Order]> {
    this.headers.set("Authorization", "Bearer " + token)
    return this.http.get<[Order]>(`${this.rootURL}/orders`, { headers: this.headers })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getOrder(id: any, token: string): Observable<Order> {
    this.headers.set("Authorization", "Bearer " + token)
    return this.http.get<Order>(`${this.rootURL}/orders/1`, { headers: this.headers })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createOrder(payload: any): Observable<Order> {
    // this.headers.set("Authorization","Bearer "+token)
    return this.http.post<Order>(`${this.rootURL}/api/orders`, payload)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  createBtalkdemoOrder(payload: any): Observable<Order> {
    // this.headers.set("Authorization","Bearer "+token)


    // var newOrder = {
    //   "id": 0,
    //   "orderID": 1008100,
    //   "customerID": 0,
    //   "productID": 0,
    //   "quantity": 0,
    //   "status": "string",
    //   "orderNumber": "string",
    //   "partnerID": 0,
    //   "orderQuantityTotal": 0
    // }

   // newOrder.orderID = this.getUniqueId(4);
    console.log("new order to be created," + payload);
    return this.http.post<Order>(`${this.orderBackendUrl}/v1/api/saveOrder`, payload)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }


  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
