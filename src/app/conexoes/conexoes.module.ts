import { NgModule } from "@angular/core";
import { ComponentsModule } from "../base/components/components.module";
import { ConexoesComponent } from "./conexoes.component";
import { ConexoesRoutingModule } from "./conexoes.routing";
import { SpotifyComponent } from './spotify/spotify.component';

@NgModule({
    declarations: [ConexoesComponent, SpotifyComponent],
    imports: [ConexoesRoutingModule, ComponentsModule],
    providers: []
  })
  export class ConexoesModule {}