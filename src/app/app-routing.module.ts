import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { HomeComponent } from './pages/home/home.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'visualizar', component: VisualizarComponent },
  { path: 'pesquisar', component: PesquisarComponent },
  { path: 'consultar', component: ConsultarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
