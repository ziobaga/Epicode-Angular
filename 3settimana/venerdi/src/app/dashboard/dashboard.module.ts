import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MoviesComponent } from './movies/movies.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    FavouritesComponent,
    MoviesComponent,
    NewMoviesComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
