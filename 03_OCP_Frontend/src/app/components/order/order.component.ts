import { Component, OnInit } from '@angular/core';
import { RestServiceProviderService } from 'src/app/services/rest-service-provider.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  createOrderForm = new FormGroup({
    pickupAddress: new FormControl(),
    destinationAddress: new FormControl(),
    productID: new FormControl(),
    quantity: new FormControl(),
    customerID: new FormControl(),
    expectedDeliveryDate: new FormControl(),
    voyageID:new FormControl(),
    status: new FormControl(),
  });

  constructor(private restService: RestServiceProviderService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  createOrder() {
   
  let payload = this.createOrderForm.getRawValue();

  let newOrder =  {
    "id": 0,
    "orderID": Number(payload.quantity),
    "customerID": 0,
    "productID": Number(payload.productID),
    "quantity": 0,
    "status": "string",
    "orderNumber": "1090081-blaha",
    "partnerID": 0,
    "orderQuantityTotal": 0
  }
    this.restService
    //.createOrder(payload)
    .createBtalkdemoOrder(newOrder)
    .subscribe((res)=> {
      console.log(res)
      this._snackBar.open('Successfully created order with Order Id'+payload.productID, 'Success',{
        verticalPosition: 'top'
      });
    }, (err)=> {
      this._snackBar.open('Error creating order', 'Error');
    })
  }

}
