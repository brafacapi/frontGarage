import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BillService{
    url= 'localhost:4000/api/bills';

    constructor(private http: HttpClient){

    }
    getBills(): Observable<any>{
        return this.http.get(this.url);
    }

}