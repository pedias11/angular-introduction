import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../interfaces/customer';

const API_URL = `${environment.apiURL}/customer`

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http: HttpClient = inject(HttpClient);

  createCustomer(customer: Customer) {
    return this.http.post<{msg: string}>(`${API_URL}/create`, customer);
  }
}
