export interface PokemonsType{
    slot: number;
    type: {
        name: string;
        url: string;
    }
}
export interface PokemonSprites{
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    back_shiny: string;
}
export interface Pokemon {
    id: number;
    name:string;
    weight:number;
    height:number;
    peso: number;
    sprites: PokemonSprites;
    types: PokemonsType[];
}
export interface PokemonsResponse{
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    }[];
}