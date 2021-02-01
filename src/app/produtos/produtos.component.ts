import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Card } from '../entidades/Card.Entidade';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

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
      table: { cols: 1, rows: 2 },
    }
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.miniCards = [];

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
          table: { cols: 1, rows: 2 },
        };
      }
      else if (state.breakpoints[Breakpoints.Medium]) {
        this.cardLayout = {
          columns: 4,
          miniCard: { cols: 2, rows: 1 },
          chart: { cols: 4, rows: 1 },
          table: { cols: 4, rows: 2 },
        };
      }
      else { // (state.breakpoints[Breakpoints.XLarge] || state.breakpoints[Breakpoints.Large]) {
        this.cardLayout = {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 },
          table: { cols: 3, rows: 2 },
        };
      }
    });

  }
}
