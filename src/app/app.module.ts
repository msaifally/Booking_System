import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import {BookingComponent} from './Components/booking/booking.component';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule,
  MatTooltipModule, MatDividerModule, MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MainService} from './Components/main/Service/main.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NotfoundComponent,
    HomepageComponent,
    BookingComponent
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
    MatTooltipModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
