import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit, OnDestroy {
  animals$ = new BehaviorSubject<any>([]);
  subscriptions$ = new Subscription();

  ngOnInit() { 
    this.subscriptions$.add(
      this.animals$.next([
        { name: 'Cat' }, { name: 'Cow' }, { name: 'Tiger' },
        { name: 'Fox' }, { name: 'Crow' }, { name: 'Snake' },
        { name: 'Rat' }, { name: 'Lion' }, { name: 'Monkey' },
      ])
    )
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
