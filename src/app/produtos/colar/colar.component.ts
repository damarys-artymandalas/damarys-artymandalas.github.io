import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-colar',
  templateUrl: './colar.component.html',
  styleUrls: ['./colar.component.css']
})
export class ColarComponent implements OnInit {
  images: GalleryItem[];

  constructor() { }

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/imagens/Colar/01.jpg', thumb: '../../assets/imagens/Colar/01.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Colar/02.jpg', thumb: '../../assets/imagens/Colar/02.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Colar/03.jpg', thumb: '../../assets/imagens/Colar/03.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Colar/04.jpg', thumb: '../../assets/imagens/Colar/04.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Colar/05.jpg', thumb: '../../assets/imagens/Colar/05.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Colar/06.jpg', thumb: '../../assets/imagens/Colar/06.jpg' }),
      // ... more items
    ];
  }
}
