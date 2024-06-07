import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MoviesService } from '../service/movies.service';
import { iMovies } from '../interfaces/movies';
import { iUsers } from '../interfaces/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private authSvc: AuthService, private moviesSvc: MoviesService) {}

  movies: iMovies[] = [];

  user: iUsers | undefined;

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      this.user = user || undefined;
    });

    this.moviesSvc.getAllMovies();

    this.moviesSvc.movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }
}
