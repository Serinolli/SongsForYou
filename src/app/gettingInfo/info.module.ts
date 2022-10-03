import { NgModule } from "@angular/core";
import { InfoComponent } from "./info.component";
import { InfoRoutingModule } from "./info.routing";
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
    declarations: [InfoComponent, PreferencesComponent],
    imports: [InfoRoutingModule],
    providers: []
  })
  export class InfoModule {}