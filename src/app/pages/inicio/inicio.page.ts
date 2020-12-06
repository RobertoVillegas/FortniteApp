import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FortniteApiService } from 'src/app/services/fortnite-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  tienda: any;
  obj: any;
  daily: Array<any>;
  featured: Array<any>;
  specialFeatured: Array<any>;

  noticias: any;

  constructor(private fortniteApi: FortniteApiService) {}

  async ngOnInit() {
    this.tienda = await this.fortniteApi.getStore();

    this.daily = this.tienda['daily']['entries'];
    this.featured = this.tienda['featured']['entries'];
    this.specialFeatured = this.tienda['specialFeatured']['entries'];

    console.log('items diarios');

    console.log(this.daily);
    console.log(this.featured);
    console.log(this.specialFeatured);

    this.obj = await this.fortniteApi.getNews();
    this.noticias = this.obj['motds'];

    console.log(this.noticias);

  }

  //
  // ─── Slides ───────────────────────────────────────────────────────────────────
  //

  slideOptsTop = {
    spaceBetween: 0,
    slidesPerView: 1.15,
  };
  /*
    slider with more narrow cards, 2 fully visible slides
  */
  // slideOptsThumbs = {
  //   spaceBetween: 0,
  //   slidesPerView: 2.65,
  // };
}
