import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
  title = 'owlcarouselinAngular';  
  images = ['../assets/img/back1.jpg','../assets/img/carousel-1.jpg', '../assets/img/carousel-2.jpg'];  
  
  SlideOptions = { autoplay: false,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
   };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 
  constructor() { }

  ngOnInit(): void {
    
  }

}
