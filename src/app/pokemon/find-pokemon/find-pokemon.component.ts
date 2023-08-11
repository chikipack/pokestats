import { Component } from '@angular/core';
import { PokemonService } from '../data-access/pokemon.service';
import { Pokedex } from '../utils/models/pokemon';
@Component({
  selector: 'app-find-pokemon',
  templateUrl: './find-pokemon.component.html',
  styleUrls: ['./find-pokemon.component.css'],
})
export class FindPokemonComponent {
  constructor(public poke_service: PokemonService) {}

  pokedexInfo?: Pokedex;

  getNewPokemon() {
    this.poke_service.getPokemon().subscribe((res) => {
      this.pokedexInfo = res as Pokedex;
      console.log(this.pokedexInfo);
    });
  }
}
