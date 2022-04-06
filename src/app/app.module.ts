import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkDropList, CdkDropListGroup, DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AngularMaterialModule } from "./material.module";
import { TaskManagerComponent } from './components/tasks/task-manager/task-manager.component';

// import {  } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent
  ],
  imports: [
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    


/*     BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkDropList */
  ],
  providers: [
    TaskManagerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
