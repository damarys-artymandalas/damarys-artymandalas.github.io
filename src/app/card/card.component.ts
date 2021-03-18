import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() imagem: string;
  @Input() descricao: string;
  constructor() { }

  ngOnInit(): void { }

  SubtituloExist(): boolean {
    if (this.subtitulo == undefined || this.subtitulo == null || this.subtitulo == '') {
      return false;
    }

    if (this.subtitulo.trim().length === 0) {
      return false;
    }
    return true;
  }

  ImagemExists(): boolean{
    if (this.imagem == undefined || this.imagem == null || this.imagem == '') {
      return false;
    }

    if (this.imagem.trim().length === 0) {
      return false;
    }
    return true;
  }
}