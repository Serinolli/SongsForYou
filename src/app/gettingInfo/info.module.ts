import { NgModule } from "@angular/core";
import { ComponentsModule } from "../base/components/components.module";
import { InfoComponent } from "./info.component";
import { InfoRoutingModule } from "./info.routing";
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
    declarations: [InfoComponent, PreferencesComponent],
    imports: [InfoRoutingModule, ComponentsModule],
    providers: []
  })
  export class InfoModule {}