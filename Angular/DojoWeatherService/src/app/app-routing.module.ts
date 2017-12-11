import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';

import { AppComponent } from './app.component';





const routes: Routes = [

  

    
  //   path: '', 
  //   pathMatch: 'full',
  //   component: AppComponent,
  //   children: []

  // },
  {
    path: ':city',
    component: DestinationComponent,

  },
  // {
  //   path: 'seattle', 
  //   pathMatch: 'full',
  //   component: SeattleComponent,
  //   children: []
  //  },
 
   
  //   {
  //     path: 'burbank', 
  //     pathMatch: 'full',
  //     component: BurbankComponent,
  //     children: []
    
  //     },
  //     {
  //       path: 'dallas', 
  //       pathMatch: 'full',
  //       component: DallasComponent,
  //       children: []
      
  //       },

  //       {
  //         path: 'washingtion', 
  //         pathMatch: 'full',
  //         component: WashingtionComponent,
  //         children: []
        
  //         },
  //         {
  //           path: 'sanjose', 
  //           pathMatch: 'full',
  //           component: SanJoseComponent,
  //           children: []
          
  //           },

            
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
