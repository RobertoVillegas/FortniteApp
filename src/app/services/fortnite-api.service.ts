import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FortniteApiService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://fortnite-api.com/v2/news/br?language=es-419');
  }

  getStore() {
    return this.http.get('https://fortnite-api.com/v2/shop/br?language=es-419');
  }
}
