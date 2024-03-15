import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeeklyDataComponent } from './weekly-data/weekly-data.component';
import { LocationComponent } from './location/location.component';
import { HourComponent } from './hour/hour.component';
import { MonthlyComponent } from './monthly/monthly.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'weekly',component:WeeklyDataComponent},
  {path:'monthly',component:MonthlyComponent},
  {path:'location',component:LocationComponent},
  {path:'hourly',component:HourComponent},
  {path:'',redirectTo:'home', pathMatch:'prefix'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
