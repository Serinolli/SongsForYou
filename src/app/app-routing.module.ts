import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { InfoComponent } from './gettingInfo/info.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: InfoComponent,
        loadChildren: () => 
        import('./gettingInfo/info.module').then(
          (info) => info.InfoModule
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
