import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-bills',
  templateUrl: './see-bills.component.html',
  styleUrls: ['./see-bills.component.scss']
})
export class SeeBillsComponent implements OnInit {

  constructor(private _billService: BillService) { }

  ngOnInit(): void {
    this.obtenerfactura();
  }
  obtenerfactura(){
    this._billService.getFacturas().Suscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
