import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  regSupplierForm = new FormGroup({
    supname: new FormControl(),
    supcategory: new FormControl(),
    supregion: new FormControl(),
    partkind: new FormControl()
  });

  suppliers = [{
    name: "Air Freight Supplier",
    img : "../../../assets/img/service-1.jpg"
  },
  {
    name: "Ocean Freight Supplier",
    img : "../../../assets/img/service-2.jpg"
  },
  {
    name: "Road Freight Supplier",
    img : "../../../assets/img/service-3.jpg"
  },
  {
    name: "Train Freight Supplier",
    img : "../../../assets/img/service-4.jpg"
  },
  {
    name: "Customs Clearance Provider",
    img : "../../../assets/img/service-5.jpg"
  },
  {
    name: "Warehouse Solutions Provider",
    img : "../../../assets/img/service-6.jpg"
  }
  ];



  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  registerSupplier() {
   
    let payload = this.regSupplierForm.getRawValue();
  
        console.log(payload)
        this._snackBar.open('Successfully registered a new supplier', 'Success');

        this.suppliers.unshift({
          name: payload.supname,
          img : "../../../assets/img/service-6.jpg"
        })
     
    }

}
