import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/entidades/Card.Entidade';
import { MiniCard } from 'src/app/entidades/Card.Mini.Entidade';

@Component({
  selector: 'app-mapaastral',
  templateUrl: './mapaastral.component.html',
  styleUrls: ['./mapaastral.component.css']
})
export class MapaastralComponent implements OnInit {
  miniCardContato: Card[];
  urlYoutube: string = 'https://www.youtube.com/embed/GkN8g2qlues';
  ngOnInit() {
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
