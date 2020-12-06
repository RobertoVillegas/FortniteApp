import { Component, OnInit } from '@angular/core';
import { FortniteApiService } from 'src/app/services/fortnite-api.service';

@Component({
  selector: 'app-casillero',
  templateUrl: './casillero.page.html',
  styleUrls: ['./casillero.page.scss'],
})
export class CasilleroPage implements OnInit {

  resultados: Array<any>;
  skins: any;

  busqueda = {
    nombre: ''
  };

  constructor(private dataService: FortniteApiService) {}

  ngOnInit() { }

  async onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.busqueda);
    this.skins = await this.dataService.getSkins(this.busqueda);
    // console.log(this.skins);
    this.resultados = this.skins;
    console.log(this.resultados);

  }
}

