import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';
  apiUrl: string = `https://testserver/bartamatyas/movies`;

  constructor(undefined) { }

  getMovieList():any {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  deleteMovie(id):any {
    return null;
  }
}
