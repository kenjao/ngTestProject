import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlaygroundComponent } from './playground/playground.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaygroundService } from './playground/playground.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlaygroundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlaygroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
