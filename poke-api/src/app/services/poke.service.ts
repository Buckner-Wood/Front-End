import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})  

export class PokeService {

  constructor(private http:HttpClient) { };
  
  getPokemonFromApi(id:number):Observable<Pokemon>{
      return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id+"/") as Observable<Pokemon>;
  };
}