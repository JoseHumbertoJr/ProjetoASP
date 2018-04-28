import { Rotas } from './rotas';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GeralService } from './geral.service';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProntuarioComponent,
    HomeComponent,
    CadastroComponent,
    ListaPacientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(Rotas)
  ],
  providers: [GeralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
