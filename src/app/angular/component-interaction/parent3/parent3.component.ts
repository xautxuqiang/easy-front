import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component} from '../child2/child2.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit, AfterViewInit {
  @ViewChild(Child2Component)
  private timerComponent: Child2Component;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  seconds() { return 0; }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
