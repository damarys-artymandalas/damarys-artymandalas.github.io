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
    this.servicos.push(this.ObterCardTarot());
    this.servicos.push(this.ObterCardConstelacao());
    this.servicos.push(this.ObterCardYouTube());
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
          columns: 3,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 },
          table: { cols: 3, rows: 3 },
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
    `
    );
  }

  ObterCardTarot(){
    return new Card("Tarot","Desvendando o Inconciente...",'./../assets/imagens/tarot.jpeg',
    `<p>Venha projetar seu <b>inconsciente</b> para analisar e interagir com o seu rico <b>mundo interior</b>.</p> Fazendo isso através das cartas...`
    );
  }

  ObterCardConstelacao(){
    return new Card("Constelação Familiar","Observando os sistemas...",'./../assets/imagens/constelacao.jpeg',
    `<p>Pressão, culpa, sem motivação, aflição por nada? </p>
     <p>Muitas vezes assumimos posições que não são nossas, e isso causa desequilibrio em todo sistema. Com a constelação, podemos identificar estes pontos...</p>`
    );
  }

  ObterCardYouTube(){
    return new Card("YouTube","Observando os sistemas...",'./../assets/imagens/constelacao.jpeg',
    `<iframe width="50" height="30" src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>`
    );
  }
}