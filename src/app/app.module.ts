import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule, 
  MatTooltipModule} from '@angular/material';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
