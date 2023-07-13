import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Animal } from '../models/animal';
import { Observable, filter, take } from 'rxjs';
import { inject } from '@angular/core';
import { AnimalService } from '../services/animalservice';

export const AnimalResolver: ResolveFn<Animal> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  animalService = inject(AnimalService)
): Observable<Animal> => {
  const animalName = route.paramMap.get('name')!;

  return animalService.getAnimalDetail(animalName).pipe(
    filter<Animal>((animal: Animal) => !!animal),
    take(1)
  )
};
