import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  priceForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.priceForm = this.fb.group({
      names: ['',Validators.required],
      surname: ['',Validators.required],
      phone: ['',Validators.required],
      mail: ['',Validators.required],
      vehicle: ['',Validators.required],
      servicio: ['',Validators.required],
      valor: ['',Validators.required]      
    })
   }

  ngOnInit(): void {
  }
  crearFactura(){
    console.log(this.priceForm)

  }
  mostrarFactura(){
    console.log(this.priceForm)
  }

}
