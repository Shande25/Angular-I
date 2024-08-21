import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pokemonData from '../../../../public/json/pokemonData.json'
import { Pokemon } from './utils/pokemon';


function randomInt(max: number){
  return Math.floor(Math.random()* max);
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  pokemons: Pokemon[] = (pokemonData as any).default;
  indicePokemonSemana: number = randomInt(3);
  
  constructor(){}
  ngOnInit(): void{
    console.log(pokemonData);
  }
}
