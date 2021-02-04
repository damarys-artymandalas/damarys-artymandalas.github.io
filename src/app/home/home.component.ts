import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Card } from '../entidades/Card.Entidade';
import { MiniCard } from '../entidades/Card.Mini.Entidade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  urlYoutube: string = 'https://www.youtube.com/embed/UKpWUtUFp8o';
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
    this.miniCards = [];
    this.miniCards.push(MiniCard.ObterCardContato());
    this.miniCards.push(MiniCard.ObterCardServicos());
    this.miniCards.push(MiniCard.ObterCardProdutos());

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
          miniCard: { cols: 2, rows: 1 },
          chart: { cols: 4, rows: 1 },
          table: { cols: 4, rows: 6 },
        };
      }
      else { // (state.breakpoints[Breakpoints.XLarge] || state.breakpoints[Breakpoints.Large]) {
        this.cardLayout = {
          columns: 3,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 },
          table: { cols: 3, rows: 6 },
        };
      }
    });

  }
}