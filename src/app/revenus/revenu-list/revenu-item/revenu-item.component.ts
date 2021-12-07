import { Component, OnInit, Output ,Input,EventEmitter } from '@angular/core';
import { Revenu } from '../../revenu.model';

@Component({
  selector: 'app-revenu-item',
  templateUrl: './revenu-item.component.html',
  styleUrls: ['./revenu-item.component.css']
})
export class RevenuItemComponent implements OnInit {
  @Input()
  revenu!: Revenu;

  @Output()
  revenuSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelected() {
    this.revenuSelected.emit();
  }
}
