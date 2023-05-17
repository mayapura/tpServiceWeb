import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './components/musica/musica.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

const routes: Routes = [
  { path: 'pageMusica', component: MusicaComponent },
  { path: 'pageDivisas', component: DivisasComponent },
  { path: 'pageHoroscopo', component: HoroscopoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pageMusica'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
