import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NonProfitService {

private userSelected = new BehaviorSubject<any>('');

constructor() { }

getUser(): Observable<any> {
  return this.userSelected.asObservable();
}

setUser(data: any) {
  this.userSelected.next(data);
}

}
