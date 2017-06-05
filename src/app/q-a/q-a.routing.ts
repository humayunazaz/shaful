import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';
import { QAComponent } from './q-a.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { AreaInterestComponent } from './area-interest/area-interest.component';
import { SingleQuestionComponent } from './single-question/single-question.component';

const qaRoutes: Routes = [
  {
    path: 'q-a',
    component: QAComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'askquestion',
        pathMatch: 'full'
      },
      {
        path: 'askquestion',
        component: AskQuestionComponent
      },
      {
        path: 'myquestions',
        component: ListQuestionComponent
      },
      {
        path: 'answerquestions',
        component: AreaInterestComponent
      },
      {
        path: 'singleQuestion/:id',
        component: SingleQuestionComponent
      }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(qaRoutes) ],
  exports: [ RouterModule ]
})

export class qaRoutingModule{

}
