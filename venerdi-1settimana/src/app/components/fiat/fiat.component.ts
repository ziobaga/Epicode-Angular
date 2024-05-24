import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';
@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss',
})
export class FiatComponent {
  autos!: iAuto[];
  brand!: string;
  brandLogo!: string;

  ngOnInit(): void {
    this.getAutos();
  }

  async getAutos() {
    const res = await fetch('../../assets/db.json');
    const response = await res.json();
    this.autos = response;
    this.autos = this.autos.filter((auto) => auto.brand == 'Fiat');
    this.brandLogo = this.autos[0].brandLogo;
    this.brand = this.autos[0].brand;
    console.log('Macchina Fiat', this.autos);
  }
}
