import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/entidades/Card.Entidade';
import { MiniCard } from 'src/app/entidades/Card.Mini.Entidade';

@Component({
  selector: 'app-constelacao',
  templateUrl: './constelacao.component.html',
  styleUrls: ['./constelacao.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConstelacaoComponent implements OnInit {
  images: GalleryItem[];
  miniCards: Card[];
  miniCardContato: Card[];
  urlYoutube: string = 'https://www.youtube.com/embed/mQBYTF2bOAo';
  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/imagens/Terapia/Constelacao/01.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/01.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Terapia/Constelacao/02.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/02.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Terapia/Constelacao/03.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/03.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Terapia/Constelacao/04.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/04.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Terapia/Constelacao/05.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/05.jpg' }),
      new ImageItem({ src: '../../assets/imagens/Terapia/Constelacao/06.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/06.jpg' }),
      // ... more items
    ];

    this.miniCards = [];
    this.miniCards.push(MiniCard.ObterCardConstelacaoPrincipal());
    this.miniCards.push(MiniCard.ObterCardConstelacaoBonecos());

    this.miniCardContato = [];
    this.miniCardContato.push(MiniCard.ObterCardContato());
  }
  constructor(private breakpointObserver: BreakpointObserver) { }
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          table: { cols: 1, rows: 2 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 2, rows: 1 },
        table: { cols: 2, rows: 2 },
      };
    })
  );
}
