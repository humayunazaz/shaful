import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';
import { DatingComponent } from './dating.component';
import { DatingDiscoverComponent } from './dating-discover/dating-discover.component';
import { SpecialSomeoneComponent } from './special-someone/special-someone.component';
import { DatingProfileComponent } from './dating-profile/dating-profile.component';
import { DatingRequestComponent } from './dating-request/dating-request.component';

const datingRoutes: Routes = [
  {
    path: 'dating',
    component: DatingComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'discovery',
        pathMatch: 'full'
      },
      {
        path: 'discovery',
        component: DatingDiscoverComponent
      },
      {
        path: 'specialsomeone',
        component: SpecialSomeoneComponent
      },
      {
        path: 'datingprofile',
        component: DatingProfileComponent
      },
      {
        path: 'datingrequests',
        component: DatingRequestComponent
      }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(datingRoutes) ],
  exports: [ RouterModule ]
})

export class datingRoutingModule{

}
