import { RouteMeta } from '@analogjs/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rickAndMortyResolver } from '../resolvers/rick-and-morty.resolver';

export const routeMeta: RouteMeta = {
  title: 'Inicio de Rick and Morty',
  resolve: { data: rickAndMortyResolver }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  template: `
    <h1>Rick and Morty</h1>
    <div class="flex flex-col gap-4">
      <h2 class="mt-10">Dynamic</h2>
      <div *ngFor="let item of dataf" class="flex gap-2 items-center justify-between border border-red-600">
        <img [src]="item.image" [alt]="item.name" height="200" width="200">
        <div class="flex flex-col gap-4">
          <span class="text-4xl font-bold">{{ item.name }}</span>
          <span>Is alive? {{ item.status ? 'Yes' : 'No' }}!</span>
        </div>
      </div>
      <h2 class="mt-10">Static</h2>
      <div *ngFor="let item of data" class="flex gap-2 items-center justify-between border border-green-600">
        <img [src]="item.image" [alt]="item.name" height="200" width="200">
        <div class="flex flex-col gap-4">
          <span class="text-4xl font-bold">{{ item.name }}</span>
          <span>Is alive? {{ item.status ? 'Yes' : 'No' }}!</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)

  constructor(
  ) {
    this.activatedRoute.data.subscribe(
      (resp) => {
        this.dataf = resp['data']
      }
    )
  }

  data: any = [
    { "id": 4, "name": "Beth Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female", "origin": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20" }, "location": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20" }, "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg", "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41", "https://rickandmortyapi.com/api/episode/42", "https://rickandmortyapi.com/api/episode/43", "https://rickandmortyapi.com/api/episode/44", "https://rickandmortyapi.com/api/episode/45", "https://rickandmortyapi.com/api/episode/46", "https://rickandmortyapi.com/api/episode/47", "https://rickandmortyapi.com/api/episode/48", "https://rickandmortyapi.com/api/episode/49", "https://rickandmortyapi.com/api/episode/51"], "url": "https://rickandmortyapi.com/api/character/4", "created": "2017-11-04T19:22:43.665Z" },
    { "id": 5, "name": "Jerry Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Male", "origin": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20" }, "location": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20" }, "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg", "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41", "https://rickandmortyapi.com/api/episode/42", "https://rickandmortyapi.com/api/episode/43", "https://rickandmortyapi.com/api/episode/44", "https://rickandmortyapi.com/api/episode/45", "https://rickandmortyapi.com/api/episode/46", "https://rickandmortyapi.com/api/episode/47", "https://rickandmortyapi.com/api/episode/48", "https://rickandmortyapi.com/api/episode/49", "https://rickandmortyapi.com/api/episode/50", "https://rickandmortyapi.com/api/episode/51"], "url": "https://rickandmortyapi.com/api/character/5", "created": "2017-11-04T19:26:56.301Z" },
    { "id": 6, "name": "Abadango Cluster Princess", "status": "Alive", "species": "Alien", "type": "", "gender": "Female", "origin": { "name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2" }, "location": { "name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2" }, "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg", "episode": ["https://rickandmortyapi.com/api/episode/27"], "url": "https://rickandmortyapi.com/api/character/6", "created": "2017-11-04T19:50:28.250Z" }
  ]

  dataf: any = []

  ngOnInit(): void {
  }

}
