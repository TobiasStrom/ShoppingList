import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',  'This is a test Recipe', 'https://2ucloq3z4wn48w1h11mb5302-wpengine.netdna-ssl.com/wp-content/uploads/pate-de-campagne-cooked-sous-vide-1920x1080.jpg'),
    new Recipe('A Test Recipe',  'This is a test Recipe', 'https://2ucloq3z4wn48w1h11mb5302-wpengine.netdna-ssl.com/wp-content/uploads/pate-de-campagne-cooked-sous-vide-1920x1080.jpg'),
    new Recipe('A Test Recipe',  'This is a test Recipe', 'https://2ucloq3z4wn48w1h11mb5302-wpengine.netdna-ssl.com/wp-content/uploads/pate-de-campagne-cooked-sous-vide-1920x1080.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
