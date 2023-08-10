import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MyPokemonComponent } from './pokemon/my-pokemon/my-pokemon.component';
import { FindPokemonComponent } from './pokemon/find-pokemon/find-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyPokemonComponent,
    FindPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
