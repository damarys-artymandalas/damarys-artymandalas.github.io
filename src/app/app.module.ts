import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CardYoutubeComponent } from './card-youtube/card-youtube.component';
import { GalleryModule } from 'ng-gallery';
import { ColarComponent } from './produtos/colar/colar.component';
import { ConjuntosComponent } from './produtos/conjuntos/conjuntos.component';
import { JapamalaComponent } from './produtos/japamala/japamala.component';
import { MandalasComponent } from './produtos/mandalas/mandalas.component';
import { PulseirasComponent } from './produtos/pulseiras/pulseiras.component';
import { MapaastralComponent } from './servicos/mapaastral/mapaastral.component';
import { TarotComponent } from './servicos/tarot/tarot.component';
import { ConstelacaoComponent } from './servicos/constelacao/constelacao.component';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    HomeComponent,
    CardComponent,
    ServicosComponent,
    ProdutosComponent,
    CardYoutubeComponent,
    ColarComponent,
    ConjuntosComponent,
    JapamalaComponent,
    MandalasComponent,
    PulseirasComponent,
    MapaastralComponent,
    TarotComponent,
    ConstelacaoComponent,
    CardGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
