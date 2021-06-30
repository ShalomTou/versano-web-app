import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreloadComponent } from './components/preload/preload.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ServicesComponent } from './components/screens/services/services.component';
import { AboutComponent } from './components/screens/about/about.component';
import { HowWorksComponent } from './components/screens/how-works/how-works.component';
import { DeliveryComponent } from './components/screens/delivery/delivery.component';
import { TestimonialsComponent } from './components/screens/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreloadComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    HowWorksComponent,
    DeliveryComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
