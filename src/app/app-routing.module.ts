import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokemonComponent } from './pokemon/my-pokemon/my-pokemon.component';
import { HomeComponent } from './home/home.component';
import { FindPokemonComponent } from './pokemon/find-pokemon/find-pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-pokemon', component: MyPokemonComponent },
  { path: 'find-pokemon', component: FindPokemonComponent },
  // Other routes go here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
