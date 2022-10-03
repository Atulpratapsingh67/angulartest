import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { AddRecordsComponent } from './add-records/add-records.component';

const approutes : Routes=[
  {path:'', component:HomeComponent},
  {path:'teacher', component:TeacherComponent},
  {path:'teacher/addrecord', component:AddRecordsComponent},
  {path:'student', component:StudentComponent},
  {path:'student/result', component:ResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    HomeComponent,
    StudentComponent,
    ResultComponent,
    AddRecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
