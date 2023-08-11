import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';

import { PokeRoutingModule } from './poke-routing.module';

import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';
import { FindPokemonComponent } from './find-pokemon/find-pokemon.component';

@NgModule({
  declarations: [MyPokemonComponent, FindPokemonComponent],
  imports: [CommonModule, PokeRoutingModule, ChartModule],
})
export class PokemonModule {}
