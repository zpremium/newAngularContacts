import { Component, OnInit } from '@angular/core';
import favoriteList from '../favorites';
import favorites from '../favorites';

interface Favorite {
  name?: string;
  email?: string;
  phoneNumber?: string;
  image?: string;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites:Favorite[]=favoriteList;

  constructor() { }

  ngOnInit(): void {
  }
  deleteContact(user: Favorite) {
    // coge el index del usuario
    let index = this.favorites.indexOf(user);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    console.log(index);
  }

}
