import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})  

export class PokeService {

  constructor(private http:HttpClient) { };
  
  getPokemonFromApi(id:number):Observable<Pokemon>{
      return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id+"/") as Observable<Pokemon>;
  };

  getEmployeeFromSpring(id:number):Observable<Employee>{
      console.log(this.http.get("http://localhost:8080/employees/"+id) as Observable<Employee>);
      return this.http.get("http://localhost:8080/employees/"+id) as Observable<Employee>;
  }
};