import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { MainComponent } from './components/template/main/main.component';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'

import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './view/todo/todo.component';
import { ListComponent } from './components/template/todo/list/list.component';
import { AddComponent } from './components/template/todo/add/add.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RemoveComponent } from './components/template/todo/remove/remove.component';
import { UpdateComponent } from './components/template/todo/update/update.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PomodoroComponent } from './components/template/pomodoro/pomodoro.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodoComponent,
    ListComponent,
    AddComponent,
    RemoveComponent,
    UpdateComponent,
    PomodoroComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
