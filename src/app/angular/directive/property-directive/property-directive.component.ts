import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-directive',
  templateUrl: './property-directive.component.html',
  styleUrls: ['./property-directive.component.css']
})
export class PropertyDirectiveComponent implements OnInit {

  color: string;

  constructor() { }

  ngOnInit() {
  }

}
