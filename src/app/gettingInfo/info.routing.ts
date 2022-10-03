import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { PreferencesComponent } from './preferences/preferences.component';

const ROTAS: Routes = [
    {
        path: '',
        component: BeginComponent,
        children: []
    },
    {
        path: 'preferences',
        component: PreferencesComponent,
        children: []
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROTAS)],
    exports: [RouterModule]
  })
  export class InfoRoutingModule {}