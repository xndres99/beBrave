import { Component } from '@angular/core';
import { Casos } from 'src/app/Clases/casos';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  idCarusel: string = "caruselCasos"; // ID del carrusel
  idControl: string = "#" + this.idCarusel; // Selector del contenedor
  casos:Casos[]; 
  swiper:Swiper;



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.casos=[new Casos(1, "assets/logo1.png", "341%", "OVERPERFORMANCE CTR", 'nuevo sabor en categoría "Bebidas alcohólicas" en diferentes mercados a través de programática y redes sociales.'),
      new Casos(1, "assets/logo2.png", "95%", "DE SUS VENTAS","alcanzadas con campañas Super Outlet diseñadas a medida"),
      new Casos(1, "assets/logo3.png", "100%", "DE CAMBIO DE PERSEPCIÓN DE MARCA","a través de branding y diseño estratégico"),
      new Casos(1, "assets/logo4.png", "200k$", "EN VENTAS CON LA CAMPAÑA OUTLET EN PANDEMIA",""),
      new Casos(1, "assets/logo5.png", "90%", "DE LAS VENTAS GENERADAS","a través de leads obtenidos en campañas estratégicas"),
    ]
    
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
       slidesPerView: 1,
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
     };
 
     if (this.swiper) {
       this.swiper.destroy(true, true);
     }
   
     this.swiper = new Swiper(this.idControl, swiperConfig);
  }
 
}
