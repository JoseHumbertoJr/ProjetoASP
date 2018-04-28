import { Injectable } from '@angular/core';
import { Paciente } from '.';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable()
export class GeralService {

  pacienteList: AngularFireList<any>;
  pacientes: Paciente = new Paciente();
  constructor(private fireBase: AngularFireDatabase) {
  
   }
  

   get(endPoint): any{
     this.fireBase.list(endPoint).snapshotChanges().subscribe(
        res =>{
          return res.map( element =>{ ({key : element.payload.key, ...element.payload.toJSON()})
          })
        }
     );
   }

}
