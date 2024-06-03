import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageRoutingModule } from '../homepage-routing/homepage-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, HomepageRoutingModule],
})
export class HomepageModule {}
