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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodoComponent,
    ListComponent,
    AddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
