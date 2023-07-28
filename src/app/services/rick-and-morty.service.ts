import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  http = inject(HttpClient)

  getConfig(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/1,2,3');
  }
}
