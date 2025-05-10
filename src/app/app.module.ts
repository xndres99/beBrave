import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Conponentes/nav/nav.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { CasosComponent } from './Componentes/casos/casos.component';
import { CarouselComponent } from './Utilidades/carousel/carousel.component';
import { ClientesComponent } from './Componentes/clientes/clientes.component';
import { CaruselClientesComponent } from './Utilidades/carusel-clientes/carusel-clientes.component';
import { CaruselMarcasComponent } from './Utilidades/carusel-marcas/carusel-marcas.component';
import { MarcasComponent } from './Componentes/marcas/marcas.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    ServiciosComponent,
    CasosComponent,
    CarouselComponent,
    ClientesComponent,
    CaruselClientesComponent,
    CaruselMarcasComponent,
    MarcasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
