import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaComponent } from './components/cha/cha.component';
import { ConComponent } from './components/con/con.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaComponent,
    ConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
