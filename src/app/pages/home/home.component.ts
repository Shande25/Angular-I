import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pokemonData from '../../../../public/json/pokemonData.json'
import { Pokemon } from './utils/pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';

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
  pokemons: Pokemon[] = [];
  indicePokemonSemana: number = randomInt(20);
  
  constructor( private pokemonsService: PokemonsService ){}
  ngOnInit(): void{
    console.log(pokemonData);
  }
  getPokemons():void{
    this.pokemonsService.getPokemons().subscribe((pokemonResponse)=>{
      for(const pokemonResult of pokemonResponse.results){
        this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon)=>{
          this.pokemons.push(pokemon);
        })
      }
    });
  }
}