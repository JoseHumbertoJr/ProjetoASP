import { Component, OnInit } from '@angular/core';
import { Paciente } from '..';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { GeralService } from '../geral.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [GeralService]
})
export class CadastroComponent implements OnInit {

  esperaOptions = ['Sim', 'Não'];

  sexoOptions = ['Feminino', 'Masculino']

  cityOptions = ['Esperança - PB',
                  'Ingá  - PB',
                  'Serra Redonda - PB',
                  'Campina Grande - PB' ];


  paciente: Paciente = new Paciente();
  
  constructor() { }

  ngOnInit() {
  }
  getDados(){
    this.paciente.nome;
  }
  
}
