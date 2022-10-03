import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { MercadoDeTrabalhoComponent } from './mercado-de-trabalho/mercado-de-trabalho.component';
import { TransNasUniversidadesComponent } from './trans-nas-universidades/trans-nas-universidades.component';
import { VisibilidadeTransComponent } from './visibilidade-trans/visibilidade-trans.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'visibilidade-trans', component: VisibilidadeTransComponent},
  {path: 'trans-nas-universidades', component: TransNasUniversidadesComponent},
  {path: 'mercado-de-trabalho', component:MercadoDeTrabalhoComponent},
  {path: 'contatos', component: ContatosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
