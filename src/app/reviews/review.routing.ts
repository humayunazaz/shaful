import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';
import { ReviewsComponent } from './reviews.component';
import { PopularEventsComponent } from './popular-events/popular-events.component';
import { ReviewComponent } from './review/review.component';
import { ReviewInterestComponent } from './review-interest/review-interest.component';
import { ReviewStreamComponent } from './review-stream/review-stream.component';

const reviewRoutes: Routes = [
  {
    path: 'reviews',
    component: ReviewsComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'stream',
        pathMatch: 'full'
      },
      {
        path: 'stream',
        component: ReviewStreamComponent
      },
      {
        path: 'popularevents',
        component: PopularEventsComponent
      },
      {
        path: 'review',
        component: ReviewComponent
      },
      {
        path: 'areasofinterest',
        component: ReviewInterestComponent
      }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(reviewRoutes) ],
  exports: [ RouterModule ]
})

export class reviewRoutingModule{

}
