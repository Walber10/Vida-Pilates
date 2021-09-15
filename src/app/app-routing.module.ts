import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BookingComponent } from './component/booking/booking.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { StudioComponent } from './component/studio/studio.component';
import { MoreComponent } from './component/more/more.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutUsComponent},
  {path:'book', component: BookingComponent},
  {path:'studios', component: StudioComponent},
  {path:'contact', component: ContactComponent},
  {path:'login', component: LoginComponent},
  {path: 'more', component: MoreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
