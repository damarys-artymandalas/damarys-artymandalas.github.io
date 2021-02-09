import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Card } from '../../entidades/Card.Entidade';
import { MiniCard } from '../../entidades/Card.Mini.Entidade';


@Component({
  selector: 'app-tarot',
  templateUrl: './tarot.component.html',
  styleUrls: ['./tarot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarotComponent implements OnInit {
  urlYoutube: string = 'https://www.youtube.com/embed/H7JCj9SlAiU';
  miniCards: Card[];
  cardLayout: {
    columns: number,
    miniCard: { cols: number, rows: number },
    chart: { cols: number, rows: number },
    table: { cols: number, rows: number },
  } = {
      columns: 1,
      miniCard: { cols: 1, rows: 1 },
      chart: { cols: 1, rows: 2 },
      table: { cols: 1, rows: 4 },
    }
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.urlYoutube = 'https://www.youtube.com/embed/H7JCj9SlAiU';
    this.miniCards = [];
    this.miniCards.push(MiniCard.ObterCardContato());
    this.miniCards.push(MiniCard.ObterCardTaro());

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.Small] || state.breakpoints[Breakpoints.XSmall]) {
        this.cardLayout = {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 },
          table: { cols: 1, rows: 6 },
        };
      }
      else if (state.breakpoints[Breakpoints.Medium]) {
        this.cardLayout = {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 4, rows: 1 },
          table: { cols: 4, rows: 6 },
        };
      }
      else { // (state.breakpoints[Breakpoints.XLarge] || state.breakpoints[Breakpoints.Large]) {
        this.cardLayout = {
          columns: 2,
          miniCard: { cols: 1, rows: 2 },
          chart: { cols: 1, rows: 1 },
          table: { cols: 2, rows: 6 },
        };
      }
    });
}
}