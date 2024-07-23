  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordItemComponent } from './password-item/password-item.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AddingPasswordWindowComponent } from './adding-password-window/adding-password-window.component';
import { FormsModule } from '@angular/forms';
import { PasswordService } from './services/passwordservice ';

@NgModule({
  declarations: [
    AppComponent,
    PasswordItemComponent,
    PasswordListComponent,
    SearchBarComponent,
    AddingPasswordWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
