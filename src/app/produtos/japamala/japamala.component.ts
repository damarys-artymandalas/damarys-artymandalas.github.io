import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-japamala',
  templateUrl: './japamala.component.html',
  styleUrls: ['./japamala.component.css']
})
export class JapamalaComponent implements OnInit {

  images: GalleryItem[];

  constructor() { }

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/imagens/Japamala/01.jpg', thumb: '../../assets/imagens/Japamala/01.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/02.jpg', thumb: '../../assets/imagens/Japamala/02.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/03.jpg', thumb: '../../assets/imagens/Japamala/03.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/04.jpg', thumb: '../../assets/imagens/Japamala/04.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/05.jpg', thumb: '../../assets/imagens/Japamala/05.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/06.jpg', thumb: '../../assets/imagens/Japamala/06.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/07.jpg', thumb: '../../assets/imagens/Japamala/07.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Japamala/08.jpg', thumb: '../../assets/imagens/Japamala/08.jpg' }),
      // ... more items
    ];
  }
}
