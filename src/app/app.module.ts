import { UserService } from './job/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CandidComponent } from './candid/candid.component';
import { JobComponent } from './job/job.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CandidComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
