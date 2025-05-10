import { Component } from '@angular/core';
import { Clientes } from 'src/app/Clases/clientes';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-carusel-clientes',
  templateUrl: './carusel-clientes.component.html',
  styleUrls: ['./carusel-clientes.component.css']
})
export class CaruselClientesComponent {

  idCarusel: string = "caruselClientes"; // ID del carrusel
  idControl: string = "#" + this.idCarusel; // Selector del contenedor
  casos:Clientes[]; 
  swiper:Swiper;

  clientes:string[]=["assets/testimonios-1a.png","assets/testimonios-2a.png","assets/testimonios-3a.png","assets/testimonios-4a.png", "assets/testimonios-5a.png","assets/testimonios-6a.png"];



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
   
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initSwiper();
  }

  
  // Configuración de Swiper
  
  private initSwiper(){
    Swiper.use([Navigation, Pagination,Autoplay]);
    const swiperConfig = {
       slidesPerView: 2,
       spaceBetween: 30,
       loop: true,
       autoplay: {
         delay: 5000, // Tiempo en milisegundos (3 segundos)
         disableOnInteraction: false, // Permite que el autoplay continúe después de la interacción del usuario
       },
       pagination: {
         el: this.idControl + ' .swiper-pagination', // Selector de paginación
         clickable: true,
       },
       navigation: {
         nextEl: this.idControl + ' .swiper-button-next', // Selector de la flecha siguiente
         prevEl: this.idControl + ' .swiper-button-prev', // Selector de la flecha anterior
       },
       breakpoints: {
        0: { // desde 0px hasta 767px
          slidesPerView: 1
        },
        800: { // desde 768px en adelante
          slidesPerView: 2
        }
      }
     };
 
     if (this.swiper) {
       this.swiper.destroy(true, true);
     }
   
     this.swiper = new Swiper(this.idControl, swiperConfig);
  }
 
}
