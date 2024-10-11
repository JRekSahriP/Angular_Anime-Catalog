import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JikanAPIService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl = "https://api.jikan.moe/v4";

  getPopularAnimes(page:number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/top/anime?page=${page}`);
  }
  
  searchAnime(title:string, page:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/anime?q=${title}&page=${page}`);
  }

  getAnimeById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/anime/${id}`);
  }
  

}
