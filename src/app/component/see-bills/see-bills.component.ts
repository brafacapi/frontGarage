import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-see-bills',
  templateUrl: './see-bills.component.html',
  styleUrls: ['./see-bills.component.scss']
})
export class SeeBillsComponent implements OnInit {

  constructor(private _BillService: BillService){};
  ngOnInit(): void {
    this.obtenerfactura();
  }
  obtenerfactura(){ 
    this._BillService.getBills().subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
    })
  }
}
