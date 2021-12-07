import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Depence } from '../../depence.model';

@Component({
  selector: 'app-depence-item',
  templateUrl: './depence-item.component.html',
  styleUrls: ['./depence-item.component.css'],
})
export class DepenceItemComponent implements OnInit {
  @Input()
  depence!: Depence;

  @Output()
  depenceSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelected() {
    this.depenceSelected.emit();
  }
}
