import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyComponent } from './spotify/spotify.component';

const ROTAS: Routes = [
    {
        path: '',
        component: SpotifyComponent,
        children: []
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROTAS)],
    exports: [RouterModule]
  })
  export class ConexoesRoutingModule {}