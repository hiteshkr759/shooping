import { Component, OnInit } from '@angular/core';
import {Recipe} from  '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes : Recipe[] = [
		new Recipe("Recipe1","DESC","http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/bangkok-com/homepage/food-top10/allParagraphs/01/top10Set/0/image.jpg"),
		new Recipe("Recipe1","DESC","http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/bangkok-com/homepage/food-top10/allParagraphs/01/top10Set/0/image.jpg"),
		new Recipe("Recipe1","DESC","http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/bangkok-com/homepage/food-top10/allParagraphs/01/top10Set/0/image.jpg"),
		new Recipe("Recipe1","DESC","http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/bangkok-com/homepage/food-top10/allParagraphs/01/top10Set/0/image.jpg"),
		new Recipe("Recipe1","DESC","http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/bangkok-com/homepage/food-top10/allParagraphs/01/top10Set/0/image.jpg"),
		new Recipe("Recipe1","DESC","http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/bangkok-com/homepage/food-top10/allParagraphs/01/top10Set/0/image.jpg")
	]; 

  constructor() { }

  ngOnInit() {
  }

}
