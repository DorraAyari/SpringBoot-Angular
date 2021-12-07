import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { categoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat!: category[];
  constructor(private CategoryService: categoryService) {}

  ngOnInit(): void {
    this.CategoryService.getCategory().subscribe((data: category[]) => {
      console.log(data);
      this.cat = data;
    });
  }

}
