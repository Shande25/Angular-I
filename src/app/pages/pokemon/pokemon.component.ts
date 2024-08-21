import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';
import * as pokemonData from '../../../../public/json/pokemonData.json'
import { Pokemon } from '../home/utils/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
pokemon?: Pokemon;
  id: number = 0;

constructor(private route: ActivatedRoute) {

}

ngOnInit(): void {
   this.route.paramMap.subscribe(
    (params)=>{
      this.id = Number (params.get('id'));
    }
  );
  this.pokemon= ((pokemonData as any).default as Pokemon[]).find((pokemon) => pokemon.id === this.id)!;
}

}
