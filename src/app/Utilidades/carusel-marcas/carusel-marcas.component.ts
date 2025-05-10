import { Component } from '@angular/core';
import { Marcas } from 'src/app/Clases/marcas';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-carusel-marcas',
  templateUrl: './carusel-marcas.component.html',
  styleUrls: ['./carusel-marcas.component.css']
})
export class CaruselMarcasComponent {
  idCarusel: string = "caruselMarcas"; // ID del carrusel
  idControl: string = "#" + this.idCarusel; // Selector del contenedor
  marcas:Marcas[]=["assets/empresa1.png","assets/empresa2.png","assets/empresa3.png","assets/empresa4.png","assets/empresa5.png","assets/empresa6.png","assets/empresa7.png","assets/empresa8.png"]; 
  swiper:Swiper;





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
       slidesPerView: 3,
       spaceBetween:10,
       loop: true,
       autoplay: {
         delay: 500, // Tiempo en milisegundos (3 segundos)
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
     };
 
     if (this.swiper) {
       this.swiper.destroy(true, true);
     }
   
     this.swiper = new Swiper(this.idControl, swiperConfig);
  }
 
}
