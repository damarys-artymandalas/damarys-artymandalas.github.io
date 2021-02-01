import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Card } from '../entidades/Card.Entidade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

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
    this.miniCards.push(this.ObterCardContato());
    this.miniCards.push(this.ObterCardServicos());
    this.miniCards.push(this.ObterCardYouTube());

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

  ObterCardContato(){
    return new Card('Entre em Contato, Tire Dúvidas e Agende!', 'Contatos:', './../assets/imagens/damarys1.jpg', 
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: damarisc.reges@gmail.com<br>
     WhatsApp: <a style='color: #FFFFFF' target="_blank" href="https://api.whatsapp.com/send?phone=5562992188233&text=Ol%C3%A1,%20atrav%C3%A9s%20do%20site%20Damarys-Artymandalas%20encontrei%20seu%20contato.%20Pode%20me%20ajudar?">(62) 99218-8233</a> <br>  
     &nbsp;Instagram: <a style='color: #FFFFFF' target="_blank" href="https://www.instagram.com/damarys_artymandalas/"> @damarys_artymandalas</a><br>
     &nbsp;&nbsp;YoutTube: <a style='color: #FFFFFF' target="_blank" href="https://www.youtube.com/user/Damaris8648"> Damarys C. Reges</a><br>
     &nbsp;&nbsp;Telegram: <a style='color: #FFFFFF' target="_blank" href="https://t.me/joinchat/HJzs4lbcTA5gHpSX"> Astro Day</a><br>
    `
    );
  }

  ObterCardServicos(){
    return new Card("Mapa Astral, Tarot, Constelação","Desvendando o Inconciente...",'./../assets/imagens/tarot.jpeg',
    `<p>Venha projetar seu <b>inconsciente</b> para analisar e interagir com o seu rico <b>mundo interior</b>. Definindo posições, hierarquias afim de ter uma vida próspera e equilibrada,
    baseando na sua pessoa <b>única</b> que você é!</p> 
    Fazendo isso através das cartas, constelações familiar, individual, Mapa Astral, etc...`
    );
  }

  ObterCardYouTube(){
    return new Card("Produtos","Arte feita com muito amor e luz! Entregas para todo Brasil",'./../assets/imagens/mandala_saojorge.png',
    `<li>Mandalas</li>
    <li>Japamalas</li>
    <li>Colares</li>
    <li>Conjuntos</li>
    `
    );
  }
}