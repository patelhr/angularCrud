import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
    constructor(private http: Http) {

    }
    get(url: string) {
        return this.http.get(url).map(res => res.json());
    }

    post(url: string, body: any) {
        return this.http.post(url, body).map(res => res.json());
    }

    put(url: string, body: any) {
        return this.http.put(url, body).map(res => res.json());
    }

    delete(url: string)
    {
        return this.http.delete(url).map(res => res.json());
    }

}
