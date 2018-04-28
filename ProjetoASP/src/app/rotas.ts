import { ProntuarioComponent } from './prontuario/prontuario.component';
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

export const Rotas: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'prontuario', component: ProntuarioComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'lista', component: ListaPacientesComponent}
];
