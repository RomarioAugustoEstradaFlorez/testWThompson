import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';

import { RoutesGuard } from './guards/routes.guard';
import { Globals } from './globals';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  { path: '', canActivate: [RoutesGuard], component: HomeComponent },
  { path: 'home', canActivate: [RoutesGuard], component: HomeComponent, data: { title: 'List' } },
  { path: 'how', canActivate: [RoutesGuard], component: HowComponent, data: { title: 'how List' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HowComponent,
    MenuComponent
  ],
  providers: [
    RoutesGuard,
    Globals
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }