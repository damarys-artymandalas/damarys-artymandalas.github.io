import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-youtube',
  templateUrl: './card-youtube.component.html',
  styleUrls: ['./card-youtube.component.css']
})
export class CardYoutubeComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() imagem: string;
  @Input() descricao: string;
  @Input() url: string;

  public SafeUrl: SafeUrl;
  private sanitizer: DomSanitizer
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
    this.SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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
