import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-pulseiras',
  templateUrl: './pulseiras.component.html',
  styleUrls: ['./pulseiras.component.css']
})
export class PulseirasComponent implements OnInit {

  images: GalleryItem[];

  constructor() { }

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/imagens/pulseiras/01.jpg', thumb: '../../assets/imagens/pulseiras/01.jpg' }),
      new ImageItem({ src: '../../assets/imagens/pulseiras/02.jpg', thumb: '../../assets/imagens/pulseiras/02.jpg' }),
      new ImageItem({ src: '../../assets/imagens/pulseiras/03.jpg', thumb: '../../assets/imagens/pulseiras/03.jpg' }),
      new ImageItem({ src: '../../assets/imagens/pulseiras/04.jpg', thumb: '../../assets/imagens/pulseiras/04.jpg' }),
      new ImageItem({ src: '../../assets/imagens/pulseiras/05.jpg', thumb: '../../assets/imagens/pulseiras/05.jpg' }),
      new ImageItem({ src: '../../assets/imagens/pulseiras/06.jpg', thumb: '../../assets/imagens/pulseiras/06.jpg' })
      // ... more items
    ];
  }
}
