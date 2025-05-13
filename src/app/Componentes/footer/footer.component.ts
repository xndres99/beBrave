import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  irFacebook(){

    window.open("https://www.facebook.com/BeBraveAd", '_blank');
  
  }
  irInsta(){
    window.open("https://www.instagram.com/bebravead?igsh=bDNwd204NTY1OW13", '_blank')
  
  }
  irLinkenlin(){
    window.open("https://www.linkedin.com/company/bebravead/", '_blank')
  
    
  }

}
