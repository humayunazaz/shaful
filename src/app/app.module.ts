import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingModule } from './app-routing.module';
import { socialRoutingModule } from './social/social.routing';
import { jobRoutingModule } from './jobs/jobs.routing';
import { datingRoutingModule } from './dating/dating.routing';
import { qaRoutingModule } from './q-a/q-a.routing';
import { reviewRoutingModule } from './reviews/review.routing';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import { NgUploaderModule } from 'ngx-uploader';
// import {InlineEditorModule} from 'ng2-inline-editor';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { AutoCompleteComponent } from './header/auto-complete/auto-complete.component';
import { NotifiComponent } from './header/notifi/notifi.component';
import { MenuComponent } from './menu/menu.component';
import { SocialComponent } from './social/social.component';
import { JobsComponent } from './jobs/jobs.component';
import { TweetsComponent } from './tweets/tweets.component';
import { DatingComponent } from './dating/dating.component';
import { QAComponent } from './q-a/q-a.component';
import { BloggerComponent } from './blogger/blogger.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatrimonialComponent } from './matrimonial/matrimonial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildTabsComponent } from './child-tabs/child-tabs.component';
import { StreamComponent } from './social/stream/stream.component';
import { ProfileComponent } from './social/profile/profile.component';
import { FriendsComponent } from './social/friends/friends.component';
import { PhotoComponent } from './social/photo/photo.component';
import { VideosComponent } from './social/videos/videos.component';
import { SettingsComponent } from './social/settings/settings.component';
import { GrandChildTabsComponent } from './social/grand-child-tabs/grand-child-tabs.component';
import { AddPostComponent } from './social/add-post/add-post.component';
import { RecommendedComponent } from './social/recommended/recommended.component';
//import { BookmarkComponent } from './bookmark/bookmark.component';
import { FriendSearchComponent } from './social/friends/friend-search/friend-search.component';
import { PhotoChildComponent } from './social/photo/photo-child/photo-child.component';
import { DiscoveryComponent } from './jobs/discovery/discovery.component';
import { MyJobsComponent } from './jobs/my-jobs/my-jobs.component';
import { CompaniesNetworkComponent } from './jobs/companies-network/companies-network.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { FindJobComponent } from './jobs/discovery/find-job/find-job.component';
import { AdzComponent } from './social/adz/adz.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { DatingDiscoverComponent } from './dating/dating-discover/dating-discover.component';
import { SpecialSomeoneComponent } from './dating/special-someone/special-someone.component';
import { DatingProfileComponent } from './dating/dating-profile/dating-profile.component';
import { DatingRequestComponent } from './dating/dating-request/dating-request.component';
import { FindDateComponent } from './dating/dating-discover/find-date/find-date.component';
import { SingleDateComponent } from './dating/dating-discover/single-date/single-date.component';
import { AskQuestionComponent } from './q-a/ask-question/ask-question.component';
import { ListQuestionComponent } from './q-a/list-question/list-question.component';
import { AreaInterestComponent } from './q-a/area-interest/area-interest.component';
import { SingleQuestionComponent } from './q-a/single-question/single-question.component';
import { PopularEventsComponent } from './reviews/popular-events/popular-events.component';
import { ReviewComponent } from './reviews/review/review.component';
import { ReviewInterestComponent } from './reviews/review-interest/review-interest.component';
import { ReviewStreamComponent } from './reviews/review-stream/review-stream.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth-service.service';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { PhotomodelComponent } from './social/photo/photomodel/photomodel.component';
import { FlashmessageComponent } from './flashmessage/flashmessage.component';
import { VideomodelComponent } from './videomodel/videomodel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    AutoCompleteComponent,
    NotifiComponent,
    MenuComponent,
    SocialComponent,
    JobsComponent,
    TweetsComponent,
    DatingComponent,
    QAComponent,
    BloggerComponent,
    ReviewsComponent,
    MatrimonialComponent,
    NotFoundComponent,
    ChildTabsComponent,
    StreamComponent,
    ProfileComponent,
    FriendsComponent,
    PhotoComponent,
    VideosComponent,
    SettingsComponent,
    GrandChildTabsComponent,
    AddPostComponent,
    RecommendedComponent,
    //BookmarkComponent
    FriendSearchComponent,
    PhotoChildComponent,
    DiscoveryComponent,
    MyJobsComponent,
    CompaniesNetworkComponent,
    PostJobComponent,
    FindJobComponent,
    AdzComponent,
    JobDetailComponent,
    DatingDiscoverComponent,
    SpecialSomeoneComponent,
    DatingProfileComponent,
    DatingRequestComponent,
    FindDateComponent,
    SingleDateComponent,
    AskQuestionComponent,
    ListQuestionComponent,
    AreaInterestComponent,
    SingleQuestionComponent,
    StreamComponent,
    PopularEventsComponent,
    ReviewsComponent,
    ReviewComponent,
    ReviewInterestComponent,
    ReviewStreamComponent,
    LoginComponent,
    SignupComponent,
    PhotomodelComponent,
    FlashmessageComponent,
    VideomodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    socialRoutingModule,
    jobRoutingModule,
    datingRoutingModule,
    qaRoutingModule,
    reviewRoutingModule,
    appRoutingModule,
    GooglePlaceModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    NgUploaderModule
    // InlineEditorModule
  ],
  providers: [AppService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
