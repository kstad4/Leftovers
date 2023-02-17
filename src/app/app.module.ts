import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component'
import { HttpClientModule } from '@angular/common/http';
import { SearchRecipesService } from './services/search-recipes.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    PantryComponent,
    SearchRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchRecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
