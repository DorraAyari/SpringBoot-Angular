import { Component, OnInit, Input } from '@angular/core';
import { Depence } from '../depence.model';
@Component({
  selector: 'app-depence-detail',
  templateUrl: './depence-detail.component.html',
  styleUrls: ['./depence-detail.component.css']
})
export class DepenceDetailComponent implements OnInit {
@Input()
  depence!: Depence;
  constructor() { }

  ngOnInit(): void {
  }

}
