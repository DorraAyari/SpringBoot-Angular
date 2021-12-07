import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Depence } from '../depence.model';

@Component({
  selector: 'app-depence-list',
  templateUrl: './depence-list.component.html',
  styleUrls: ['./depence-list.component.css'],
})
export class DepenceListComponent implements OnInit {
  depences: Depence[] = [
    new Depence(
      'A Test Depence',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Depence(
      'A Test Depence',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Depence(
      'A Test Depence',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  @Output() depenceWasSelected = new EventEmitter<Depence>();
  constructor() {}

  ngOnInit(): void {}
  onDepenceSelected(depence: Depence) {
    this.depenceWasSelected.emit(depence);
  }
}
