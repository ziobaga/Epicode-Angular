import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMovies } from '../interfaces/movies';
import { Observable, Observer, Subject } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {
    this.loadFavFromLocalStorage();
  }

  private fav: iMovies[] = [];
  private mov = new Subject<iMovies[]>();
  movies$ = this.mov.asObservable();

  private loadFavFromLocalStorage() {
    const favFromStorage = localStorage.getItem('favMovies');
    if (favFromStorage) {
      this.fav = JSON.parse(favFromStorage);
    }
  }

  private saveFavToLocalStorage() {
    localStorage.setItem('favMovies', JSON.stringify(this.fav));
  }

  getAllMovies() {
    return this.http
      .get<iMovies[]>(environment.moviesUrl)
      .subscribe((movies) => this.mov.next(movies));
  }

  addMovie(movie: iMovies) {
    return this.http
      .post<iMovies>(environment.moviesUrl, movie)
      .subscribe((newMovie) => {
        this.getAllMovies();
      });
  }

  deleteMovie(id: number) {
    return this.http.delete(`${environment.moviesUrl}/${id}`).subscribe(() => {
      this.getAllMovies();
    });
  }

  addToFav(prod: iMovies) {
    const movie = this.fav.find((mov) => mov.id === prod.id);
    if (!movie) {
      this.fav.push(prod);
      this.saveFavToLocalStorage();
    }
  }

  removeFromFav(id: number) {
    const index = this.fav.findIndex((el) => el.id === id);
    if (index > -1) {
      this.fav.splice(index, 1);
      this.saveFavToLocalStorage();
    }
  }

  get favList() {
    return new Observable((obs: Observer<iMovies[]>) => {
      obs.next(this.fav);
    });
  }

  isFav(id: number) {
    return this.fav.find((prd) => prd.id === id);
  }
}
