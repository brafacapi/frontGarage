import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  billsForm: FormGroup;
  constructor(private bf:FormBuilder) { 
    this.billsForm = this.bf.group(
      {
      date: ["",Validators.required],
      names: ["",Validators.required],
      bill: ["",Validators.required],
      phone: ["",Validators.required],
      mail: ["",Validators.required],
      vehicle: ["",Validators.required],
      servicio: ["", Validators.required],
      valor: ["",Validators.required]   
    }
    );
  }

  ngOnInit(): void {
  }
  crearBill() {
    console.log(this.billsForm)
  }
}
