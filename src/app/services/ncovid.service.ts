import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class NCovidService {

    private basePath = 'https://api.apify.com/v2/key-value-stores'
    private reportPath = 'Tksmptn5O41eHrT4d/records/LATEST';
    private summaryPath = 'ZsOpZgeg7dFS1rgfM/records/LATEST';
    
    constructor(private http: HttpClient) { }

    getReport() {
        return this.http.get(`${this.basePath}/${this.reportPath}`);
    }
    getSummary() {
        return this.http.get(`${this.basePath}/${this.summaryPath}`);
    }
}