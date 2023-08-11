import { Component } from '@angular/core';
import { PokemonService } from '../data-access/pokemon.service';
import { Pokedex } from '../utils/models/pokemon';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-find-pokemon',
  templateUrl: './find-pokemon.component.html',
  styleUrls: ['./find-pokemon.component.css'],
})
export class FindPokemonComponent {
  constructor(public poke_service: PokemonService) {}

  pokedexInfo?: Pokedex;
  pokeStatsChart?: Chart;

  getNewPokemon() {
    this.poke_service.getPokemon().subscribe((res) => {
      this.pokedexInfo = res as Pokedex;
      console.log(this.pokedexInfo);
      var statsNames: string[] = [];
      var statsValues: number[] = [];
      this.pokedexInfo.stats.forEach((element) => {
        statsNames.push(element.stat.name);
        statsValues.push(element.base_stat);
      });
      console.table(statsNames);
      console.table(statsValues);
      if (this.pokeStatsChart != undefined) this.pokeStatsChart.destroy();
      this.pokeStatsChart = new Chart('myChart', {
        type: 'radar',
        data: {
          labels: statsNames,
          datasets: [
            {
              label: 'power',
              data: statsValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `${this.pokedexInfo.name}'s Stats`,
            },
          },
          scales: {
            r: {
              min: 0, // Establece el valor mínimo en 0
              // max: Math.max(...data), // Utiliza el valor máximo del arreglo de datos
              beginAtZero: true,
            },
          },
        },
      });
    });
  }
}
