import { Component } from '@angular/core';
import { iMovies } from '../../interfaces/movies';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrl: './new-movies.component.scss',
})
export class NewMoviesComponent {
  constructor(private moviesSvc: MoviesService) {}

  movies: iMovies[] = [];
  newMovie: iMovies = {
    id: 0,
    title: '',
    description: '',
    image: '',
    duration: '',
  };

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesSvc.getAllMovies();
    this.moviesSvc.movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

  addMovie() {
    this.moviesSvc.addMovie(this.newMovie);
    this.newMovie = {
      id: 0,
      title: '',
      description: '',
      image: '',
      duration: '',
    };
  }
}
