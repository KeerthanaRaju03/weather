import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClientJsonpModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationComponent } from './location/location.component';
import { TestingComponent } from './testing/testing.component';
import { WeeklyDataComponent } from './weekly-data/weekly-data.component';
import { HourComponent } from './hour/hour.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { SharedService } from './shared/shared.service';
import { DatePipe } from '@angular/common';
import { ChunkPipe } from './monthly/chunk.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LocationComponent,
    TestingComponent,
    WeeklyDataComponent,
    HourComponent,
    MonthlyComponent,
    ChunkPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [SharedService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
