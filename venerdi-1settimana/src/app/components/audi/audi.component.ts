import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';
@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
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
    this.autos = this.autos.filter((auto) => auto.brand == 'Audi');
    this.brandLogo = this.autos[0].brandLogo;
    this.brand = this.autos[0].brand;
    console.log('Macchina Audi', this.autos);
  }
}
