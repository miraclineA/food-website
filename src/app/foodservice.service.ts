import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor(private http: HttpClient) { }
  api = "http://localhost:3000/foodDetails"

  getOrder() {
    return this.http.get(this.api)
  }
  getFoodDetails(id: any) {
    return this.http.get(`${this.api}/${id}`)

  }
}
