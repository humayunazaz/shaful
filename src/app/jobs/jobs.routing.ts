import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';
import { JobsComponent } from './jobs.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { CompaniesNetworkComponent } from './companies-network/companies-network.component';
import { PostJobComponent } from './post-job/post-job.component';

const jobRoutes: Routes = [
  {
    path: 'jobs',
    component: JobsComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'discovery',
        pathMatch: 'full'
      },
      {
        path: 'discovery',
        component: DiscoveryComponent
      },
      {
        path: 'myjobs',
        component: MyJobsComponent
      },
      {
        path: 'resumebuilder',
        component: CompaniesNetworkComponent
      },
      {
        path: 'postajob',
        component: PostJobComponent
      }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(jobRoutes) ],
  exports: [ RouterModule ]
})

export class jobRoutingModule{

}
