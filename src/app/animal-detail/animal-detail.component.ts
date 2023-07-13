import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animalservice';


@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal$!: Observable<Animal>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public animalService: AnimalService
  ) { }

  ngOnInit() {
    // parameter parsing way
    // this.animal$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.animalService.getAnimalDetail(params.get('name')!))
    // );

    // data available by resolver
    this.route.data.subscribe((response: any) => {
      this.animal$ = of(response.data);
    });

  }

  gotoAnimals() {
    this.router.navigate(['/animals']);
  }
}
