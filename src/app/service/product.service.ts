import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private apiURL = "http://5a572260751d4e001277964d.mockapi.io/act/product";

    constructor (private _http: Http){

    }

    getList(): Observable<any[]>{
        return this._http.get(this.apiURL).map((response:Response) => response.json())
    }
}
