import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { OtherComponent } from './components/other/other.component';

const routes: Routes = [{
    path: 'pokedex',
    component: PokedexComponent
},{
    path: 'other',
    component: OtherComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
