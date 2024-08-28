import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Pokemon, PokemonsResponse } from '../../pages/home/utils/pokemon';  
@Injectable({  
  providedIn: 'root'  
})  
export class PokemonsService {  
private url = 'https://pokeapi.co/api/v2/pokemon/';  
  constructor(private http: HttpClient) { }  
  
    getPokemons(offset : number = 0, limit : number = 20):Observable<PokemonsResponse>{  
     return this.http.get<PokemonsResponse>(`${this.url}?offset=${offset}&limit=${limit}`)   
    }  
    getPokemon(param: string | number):Observable<Pokemon>{  
      return this.http.get<Pokemon>(`${this.url}${param}`)  
    }  
}