import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { RootObject } from 'src/interfaces/recipes';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SearchRecipesService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'x-rapidapi-host': 'tasty.p.rapidapi.com',
    'x-rapidapi-key': '7c74d55e43msh895d92d3174837fp19733djsn47065daa1688'
  });

  parameters = new HttpParams()
    .set("q", "chicken")

  getRecipes(): Observable<RootObject> {
    return this.http
      .get<RootObject>('https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&tags=under_30_minutes&', {
        headers: this.headers,
        params: this.parameters
      })
      // .toPromise;
  };


  // options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '7c74d55e43msh895d92d3174837fp19733djsn47065daa1688',
  //     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  //   }
  // };

  // getRecipes() {
  //   return fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=chicken%20noodle', this.options)
  //     // .toPromise()
  //     .then(response => response.json())
  //     // .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // };

};
