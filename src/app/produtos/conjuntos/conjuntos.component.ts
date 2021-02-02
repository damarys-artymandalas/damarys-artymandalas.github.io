import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.css']
})
export class ConjuntosComponent implements OnInit {

  images: GalleryItem[];

  constructor() { }

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/imagens/Conjuntos/01.jpg', thumb: '../../assets/imagens/Conjuntos/01.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Conjuntos/02.jpg', thumb: '../../assets/imagens/Conjuntos/02.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Conjuntos/03.jpg', thumb: '../../assets/imagens/Conjuntos/03.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Conjuntos/04.jpg', thumb: '../../assets/imagens/Conjuntos/04.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Conjuntos/05.jpg', thumb: '../../assets/imagens/Conjuntos/05.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Conjuntos/06.jpg', thumb: '../../assets/imagens/Conjuntos/06.jpg' }),
      // ... more items
    ];
  }
}
