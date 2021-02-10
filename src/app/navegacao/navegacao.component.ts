import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {
  head: string = "";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {  }
  
  ngOnInit(): void {
    this.head = "Seja bem vindo!";
  }

  AtualizaCabecalho(valor: string) {
    this.head = valor;
  }

  coloque() {
    window.open("https://www.sadhana.com.br/ceu.htm","coloque","scrollbars=yes,width=560,height=400");
  }
  mostraceu() {
    let ceuref=document.location.href;
    let posic = ceuref.indexOf("sadhana.com.br");
    if (posic > 1) {
      ceuref="";
    }
    ceuref=escape(ceuref);
    window.open("https://www.sadhana.com.br/cgi-local/mapas/mapanow.cgi?indic=39099&ref="+ceuref,"mapa","scrollbars=yes,width=670,height=530");
  }
}
