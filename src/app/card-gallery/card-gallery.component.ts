import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit {
  @Input() images: GalleryItem[];
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() imagem: string;
  @Input() descricao: string;
  constructor() { }

  ngOnInit(): void {
  }
  SubtituloExist(): boolean {
    if (this.subtitulo == undefined || this.subtitulo == null || this.subtitulo == '') {
      return false;
    }

    if (this.subtitulo.trim().length === 0) {
      return false;
    }
    return true;
  }

  ImagemExists(): boolean {
    if (this.imagem == undefined || this.imagem == null || this.imagem == '') {
      return false;
    }

    if (this.imagem.trim().length === 0) {
      return false;
    }
    return true;
  }
}
