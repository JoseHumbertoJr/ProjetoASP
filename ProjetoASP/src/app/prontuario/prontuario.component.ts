import { Component, OnInit, DoCheck } from '@angular/core';
import { Ficha } from '..';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})
export class ProntuarioComponent implements OnInit {

  ficha: Ficha = new Ficha();

  diabetesOptions = ['Sim', 'Não'];
  observacaoOptions = ['Sim', 'Não'];
  alergicoOptions = ['Sim', 'Não'];

  constructor() { }

  ngOnInit() {
  }


  ngDoCheck(){
    console.log(this.ficha.prescricao)
  }

}
