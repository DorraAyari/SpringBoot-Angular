import { Component, OnInit } from '@angular/core';
import { Revenu } from './revenu.model';

@Component({
  selector: 'app-revenus',
  templateUrl: './revenus.component.html',
  styleUrls: ['./revenus.component.css']
})
export class RevenusComponent implements OnInit {
  selectedRevenu!: Revenu;
  constructor() { }

  ngOnInit(): void {
  }

}
