import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public seconds: any;
  public botaoEstaDesabilitado: boolean = false;

  constructor(public senhasService: SenhasService) {
  }


  atenderSenha() {
    this.botaoEstaDesabilitado = true;
  }

  encerrarSenha() {
    this.botaoEstaDesabilitado = false;
  }
}
