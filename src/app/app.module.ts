import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { VisibilidadeTransComponent } from './visibilidade-trans/visibilidade-trans.component';
import { TransNasUniversidadesComponent } from './trans-nas-universidades/trans-nas-universidades.component';
import { MercadoDeTrabalhoComponent } from './mercado-de-trabalho/mercado-de-trabalho.component';
import { ContatosComponent } from './contatos/contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    VisibilidadeTransComponent,
    TransNasUniversidadesComponent,
    MercadoDeTrabalhoComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
