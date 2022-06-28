import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
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

    public employee:Employee|null = null;

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

  showEmployee(){
    this.pokeService.getEmployeeFromSpring(this.input).subscribe(
        (data: Employee)=>{
            data = new Employee(data.id, data.name, data.salary);
            this.employee=data;
            console.log(data);
        },(error)=>{
            this.employee=null;
            console.log(error);
        }
    )
  }
}
