import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as pokemonData from '../../../../public/json/pokemonData.json'
import { Pokemon, PokemonsResponse } from '../home/utils/pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
 
// pokemons: Pokemon[] = (pokemonData as any).default;
pokemons: Pokemon[] =[];
pokemonResponse?: PokemonsResponse;
  constructor(private router: Router,private pokemonsService: PokemonsService){}
  ngOnInit(): void{
    this.getPokemons();
    
  }
  getPokemons():void{
    this.pokemonsService.getPokemons().subscribe((pokemonResponse)=>{
      this.pokemonResponse = pokemonResponse;
      for(const pokemonResult of pokemonResponse.results){
        this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon)=>{
          this.pokemons.push(pokemon);
        })
      }
    });
    

  }
  onClickButton():void{
    console.log(this.pokemons);
  }

  onClickPokemon(pokemon:Pokemon):void{
    this.router.navigate(['/pokemon', pokemon.id])
  }

}
