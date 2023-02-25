import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SmallRecipeCardComponent } from './components/small-recipe-card/small-recipe-card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pantry',
    component: PantryComponent
  },
  {
    path: 'recipe-card',
    component: RecipeCardComponent
  }, 
    {
      path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'small-recipe-card',
    component: SmallRecipeCardComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
