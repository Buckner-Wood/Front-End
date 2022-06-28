import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
    
    public pokemon:Pokemon|null = null;
    public input:number = 0;

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
  }
  
  getPoke(){
      this.pokeService.getPokemonFromApi(this.input).subscribe(
          (data: Pokemon)=>{
              data = new Pokemon(data.name, data.types, data.sprites);
              this.pokemon=data;
              console.log(data);
          },(error)=>{
              this.pokemon=null;
              console.log("It got away!");
              console.log(error);
          }
        )
    }
}
