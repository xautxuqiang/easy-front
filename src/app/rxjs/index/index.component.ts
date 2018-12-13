import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source$ = Observable.create(observer => {
      console.log('on subscribe');
      setTimeout(() => observer.next(1), 1000);
      setTimeout(() => observer.next(2), 1000);
      setTimeout(() => observer.next(3), 1000);
      return {
        unsubscribe: () => {
          console.log('on unsubscribe');
        }
      };
    });
    const repeated$ = source$.repeat(2);
    repeated$.subscribe(
      console.log,
      null,
      () => console.log('complete')
    );
  }
}
