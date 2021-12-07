import { Component, OnInit } from '@angular/core';
import { Depence } from './depence.model';

@Component({
  selector: 'app-depences',
  templateUrl: './depences.component.html',
  styleUrls: ['./depences.component.css'],
})
export class DepencesComponent implements OnInit {
  selectedDepence!: Depence;
  constructor() {}

  ngOnInit(): void {}

}
