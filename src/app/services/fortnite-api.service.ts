import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FortniteApiService {

  constructor(private http: HttpClient) { }

  getStore(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get('https://fortnite-api.com/v2/shop/br?language=es-419').subscribe((res) => {
        // console.log(res);
        resolve(res['data']);
      });
    });
  }

  getNews(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get('https://fortnite-api.com/v2/news/br?language=es-419').subscribe((res) => {
        // console.log(res);
        resolve(res['data']);
      });
    });
  }

  getSkins(skin: any): Promise<any> {
    // console.log(skin);
    // console.log(skin.nombre);
    return new Promise((resolve) => {
      this.http.get(`https://fortnite-api.com/v2/cosmetics/br/search/all?language=es-419&searchLanguage=es-419&matchMethod=contains&name=${skin.nombre}`).subscribe((res) => {
        // console.log(res);
        resolve(res['data']);
      });
    });
  }
}
