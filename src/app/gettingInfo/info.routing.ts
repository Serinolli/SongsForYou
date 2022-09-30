import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './begin/begin.component';

const ROTAS: Routes = [
    {
        path: 'getting-started',
        component: BeginComponent,
        children: []
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROTAS)],
    exports: [RouterModule]
  })
  export class InfoRoutingModule {}