import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SimpleComponent } from './simple/simple.component';
import { AdvancedComponent } from './advanced/advanced.component';


const appRoutes: Routes =[

  {path: 'simple', component: SimpleComponent},
  {path: 'advanced', component: AdvancedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SimpleComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
