import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BeginComponent } from './gettingInfo/begin/begin.component'; 
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
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
