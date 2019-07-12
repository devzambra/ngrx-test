import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/redux/actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  template: `
  <button id="increment" (click)="increment()">Increment</button>

  <div>Current Count: {{ count$ | async }}</div>

  <button id="decrement" (click)="decrement()">Decrement</button>

  <button id="reset" (click)="reset()">Reset Counter</button>
  `,
  styles: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count$: Observable<number>;


  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
