import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@Component({
  selector: 'home-view',
  template: 'home!'
})
export class HomeView {}

@NgModule({
  declarations: [
    AppComponent,
    HomeView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'lazy', loadChildren: './lazy.module#LazyModule'},
      {path: '', component: HomeView}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
