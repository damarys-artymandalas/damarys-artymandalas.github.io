import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColarComponent } from './produtos/colar/colar.component';
import { ConjuntosComponent } from './produtos/conjuntos/conjuntos.component';
import { JapamalaComponent } from './produtos/japamala/japamala.component';
import { MandalasComponent } from './produtos/mandalas/mandalas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PulseirasComponent } from './produtos/pulseiras/pulseiras.component';
import { ConstelacaoComponent } from './servicos/constelacao/constelacao.component';
import { MapaastralComponent } from './servicos/mapaastral/mapaastral.component';
import { ServicosComponent } from './servicos/servicos.component';
import { TarotComponent } from './servicos/tarot/tarot.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'servicos', component:ServicosComponent},
  {path:'produtos', component:ProdutosComponent},
  {path:'produtos/colar', component:ColarComponent},
  {path:'produtos/conjuntos', component:ConjuntosComponent},
  {path:'produtos/japamala', component:JapamalaComponent},
  {path:'produtos/mandala', component:MandalasComponent},
  {path:'produtos/pulseira', component:PulseirasComponent},
  {path:'servicos/mapaastral', component:MapaastralComponent},
  {path:'servicos/constelacao', component:ConstelacaoComponent},
  {path:'servicos/tarot', component:TarotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
