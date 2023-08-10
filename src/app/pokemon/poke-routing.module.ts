import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';
import { FindPokemonComponent } from './find-pokemon/find-pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'my-pokemon', component: MyPokemonComponent },
      { path: 'find-pokemon', component: FindPokemonComponent },
      { path: '**', redirectTo: 'my-pokemon' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PokeRoutingModule {}
