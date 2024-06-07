import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMovies } from '../interfaces/movies';
import { Observable, Observer, Subject } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private fav: iMovies[] = [];
  private mov = new Subject<iMovies[]>();
  movies$ = this.mov.asObservable();

  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.loadFavFromLocalStorage(user.id);
      } else {
        this.fav = [];
      }
    });
  }

  private loadFavFromLocalStorage(userId: number) {
    const favFromStorage = localStorage.getItem(`favMovies_${userId}`);
    if (favFromStorage) {
      this.fav = JSON.parse(favFromStorage);
    } else {
      this.fav = [];
    }
  }

  private saveFavToLocalStorage(userId: number) {
    localStorage.setItem(`favMovies_${userId}`, JSON.stringify(this.fav));
  }

  getAllMovies() {
    return this.http
      .get<iMovies[]>(environment.moviesUrl)
      .subscribe((movies) => {
        this.mov.next(movies);
      });
  }

  addMovie(movie: iMovies) {
    return this.http
      .post<iMovies>(environment.moviesUrl, movie)
      .subscribe(() => {
        this.getAllMovies();
      });
  }

  deleteMovie(id: number) {
    return this.http.delete(`${environment.moviesUrl}/${id}`).subscribe(() => {
      this.getAllMovies();
    });
  }

  addToFav(movie: iMovies) {
    const user = this.authSvc.userSub.value;
    if (user) {
      const existingMovie = this.fav.find((mov) => mov.id === movie.id);
      if (!existingMovie) {
        this.fav.push(movie);
        this.saveFavToLocalStorage(user.id);
      }
    }
  }

  removeFromFav(id: number) {
    const user = this.authSvc.userSub.value;
    if (user) {
      const index = this.fav.findIndex((el) => el.id === id);
      if (index > -1) {
        this.fav.splice(index, 1);
        this.saveFavToLocalStorage(user.id);
      }
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
