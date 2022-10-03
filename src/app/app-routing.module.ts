import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ConexoesComponent } from './conexoes/conexoes.component';
import { InfoComponent } from './gettingInfo/info.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'info',
        component: InfoComponent,
        loadChildren: () => 
        import('./gettingInfo/info.module').then(
          (info) => info.InfoModule
        )
      },
      {
        path: 'conexao',
        component: ConexoesComponent,
        loadChildren: () => 
        import('./conexoes/conexoes.module').then(
          (con) => con.ConexoesModule
        )
      },
      {
        path: 'components',
        loadChildren: () => import('./base/components/components.module').then(m => m.ComponentsModule),
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
