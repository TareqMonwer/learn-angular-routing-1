import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseImageUrl: string = 'https://loremflickr.com/320/240/';
  imageUrlLoadingError: string = '';

  constructor(private httpService: HttpClient) { }

  getAnimalImageUrl(animalName: string): Observable<string> {
    return this.httpService.get<string>(`${this.baseImageUrl}${animalName}`);
  }

  getAnimalDetail(animalName: string) {
    let imageUrl = '';
    this.getAnimalImageUrl(animalName).subscribe(
      (reponse) => {
        imageUrl = reponse;
      },
      (error) => {
        this.imageUrlLoadingError = "This image could not be loaded";
      }
    )
    return of(
      {
        name: animalName,
        age: 21,
        imageUrl: imageUrl
      });
  }
}
