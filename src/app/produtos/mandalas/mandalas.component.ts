import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-mandalas',
  templateUrl: './mandalas.component.html',
  styleUrls: ['./mandalas.component.css']
})
export class MandalasComponent implements OnInit {
  images: GalleryItem[];

  constructor() { }

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/imagens/Mandalas/01.jpg', thumb: '../../assets/imagens/Mandalas/01.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/02.jpg', thumb: '../../assets/imagens/Mandalas/02.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/03.jpg', thumb: '../../assets/imagens/Mandalas/03.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/04.jpg', thumb: '../../assets/imagens/Mandalas/04.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/05.jpg', thumb: '../../assets/imagens/Mandalas/05.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/06.jpg', thumb: '../../assets/imagens/Mandalas/06.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/07.jpg', thumb: '../../assets/imagens/Mandalas/07.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Mandalas/08.png', thumb: '../../assets/imagens/Mandalas/08.png' }),
      // ... more items
    ];
  }
}
