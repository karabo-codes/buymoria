import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyMoreItem } from '../components/models/itemModel';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  private itemsUrl = 'http://demo2734352.mockable.io/buymoriaItems'; // URL to web API

  constructor(private http: HttpClient) { }

  getItems(): Observable<BuyMoreItem[]> {
    return this.http.post<BuyMoreItem[]>(this.itemsUrl, '');
  }
}