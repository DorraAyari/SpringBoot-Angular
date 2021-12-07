import { Component, OnInit ,Input} from '@angular/core';
import { Revenu } from '../revenu.model';

@Component({
  selector: 'app-revenu-detail',
  templateUrl: './revenu-detail.component.html',
  styleUrls: ['./revenu-detail.component.css']
})
export class RevenuDetailComponent implements OnInit {
  @Input()
  revenu!: Revenu;
  constructor() { }

  ngOnInit(): void {
  }

}
