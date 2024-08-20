import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pokemons', component: PokemonsComponent},
    {path: 'acercade', component: AcercadeComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
];
