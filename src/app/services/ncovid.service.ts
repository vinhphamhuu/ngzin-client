import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class NCovidService {

    private reportPath = 'https://api.apify.com/v2/key-value-stores/Tksmptn5O41eHrT4d/records/LATEST';
    constructor(private http: HttpClient) { }

    getReport() {
        return this.http.get(this.reportPath);
    }
}