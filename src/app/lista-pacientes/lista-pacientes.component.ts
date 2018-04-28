import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database'

import { GeralService } from '../geral.service';
import {Paciente} from '../Models/Paciente.model'
import {CadastroComponent} from '../cadastro/cadastro.component';

const endpoint : string = 'Paciente'


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  pacientes : Array<Paciente> = new Array<Paciente>()


  constructor(private service : GeralService) {
    this.pacientes = this.service.get(endpoint) 
  }

  ngOnInit() {

  }

}
