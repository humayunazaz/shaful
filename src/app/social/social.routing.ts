import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';
import { SocialComponent } from './social.component';
import { StreamComponent } from './stream/stream.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotoComponent } from './photo/photo.component';
import { VideosComponent } from './videos/videos.component';

const socialRoutes: Routes = [
  {
    path: 'social',
    component: SocialComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'stream',
        pathMatch: 'full'
      },
      {
        path: 'stream',
        component: StreamComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'photos',
        component: PhotoComponent
      },
      {
        path: 'videos',
        component: VideosComponent
      }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(socialRoutes) ],
  exports: [ RouterModule ]
})

export class socialRoutingModule{

}
