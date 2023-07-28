import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RickAndMortyService } from '../services/rick-and-morty.service';

export const rickAndMortyResolver: ResolveFn<any> = (route, state) => {
  const rymService = inject(RickAndMortyService)

  return rymService.getConfig()
};
