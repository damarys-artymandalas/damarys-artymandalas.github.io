import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Card } from '../entidades/Card.Entidade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicos: Card[];
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
    this.servicos = [];
    this.servicos.push(this.ObterCardContato());
    this.servicos.push(new Card('Tarô', '', 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/taro.jpg', 'Ler <b>as</b> cartas de acordo com datas'));
    this.servicos.push(new Card('Constelação', '', 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/taro.jpg', 'Constelação Familiar...'));
    this.servicos.push(new Card('Regressão', '', './../assets/imagens/damarys1.jpg', 'Voltar ao passando para melhor entender o presente'));
    this.servicos.push(new Card('Cromoterapia', '', '', 'Terapia das cores'));

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
          table: { cols: 1, rows: 3 },
        };
      }
      else if (state.breakpoints[Breakpoints.Medium]) {
        this.cardLayout = {
          columns: 4,
          miniCard: { cols: 2, rows: 1 },
          chart: { cols: 4, rows: 1 },
          table: { cols: 4, rows: 3 },
        };
      }
      else { // (state.breakpoints[Breakpoints.XLarge] || state.breakpoints[Breakpoints.Large]) {
        this.cardLayout = {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 2, rows: 1 },
          table: { cols: 4, rows: 3 },
        };
      }
    });

  }

  ObterCardContato(){
    return new Card('Entre em Contato e Agende!', 'Contatos:', './../assets/imagens/damarys1.jpg', 
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: <br>
     WhatsApp: <br>
     &nbsp;Instagram: <br>
     &nbsp;&nbsp;YoutTube: <br>
    `
    );
  }

}