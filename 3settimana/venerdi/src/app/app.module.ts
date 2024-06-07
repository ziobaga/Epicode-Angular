import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './main-component/footer/footer.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
