import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as pokemonData from '../../../../public/json/pokemonData.json'
import { Pokemon } from '../home/utils/pokemon';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemon[] = (pokemonData as any).default;

  constructor(private router: Router){}
  ngOnInit(): void{
    
  }
  onClickButton():void{
    console.log(this.pokemons);
  }

  onClickPokemon(pokemon:Pokemon):void{
    this.router.navigate(['/pokemon', pokemon.id])
  }

}
