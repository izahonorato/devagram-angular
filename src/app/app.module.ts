import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartilhadoModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
