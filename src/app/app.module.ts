import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
