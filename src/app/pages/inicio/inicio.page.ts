import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FortniteApiService } from 'src/app/services/fortnite-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  noticias: Observable<any>;

  constructor(private fortniteApi: FortniteApiService) { }

  ngOnInit() {
    // this.noticias = this.fortniteApi.getNews();
  }

}
