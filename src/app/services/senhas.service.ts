import { Injectable, Component } from '@angular/core';
import { Senha } from './senha.interface';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})


export class SenhasService {

// YYMMDD-{tipo de senha}{numero da senha}
  public now: Date | string = new Date();
  

  public senhas: Senha[] = [{
    icon: 'accessibility',
    color: 'primary',
    codigo: '240401-SP01',
    tm_geracao: '2024-04-01 19:10:09',
  },
  {
    icon: 'document',
    color: 'medium',
    codigo: '240401-SE01',
    tm_geracao: '2024-04-01 19:20:09',
  },
  {
    icon: 'accessibility',
    color: 'primary',
    codigo: '240401-SP02',
    tm_geracao: '2024-04-01 19:30:09',
  },
  {
    icon: 'bandage',
    color: 'dark',
    codigo: '240401-SG01',
    tm_geracao: '2024-04-01 19:40:09',
  }];
  public inputNovaSenha: string = '';
public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  constructor() { }

  formatarSenha(tipoSenha: string, contadorTipoSenha: number): string {
    const novaSenha = new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha + 
        contadorTipoSenha.toString().padStart(2, '0');

        return novaSenha;
  }

  formatarDataAtual(): string {
    return format(this.now, 'yyyy-MM-dd HH:mm:ss');
  }

  adicionarSenha(senha: any) {
    this.senhas.push(senha);
  }

  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha: string = '') {
    let senhaFormatada: string = '';
    if (tipoSenha == 'SG') {
      this.somaGeral();
      senhaFormatada = this.formatarSenha(tipoSenha, this.senhasGeral);
      // this.senhaArray['SG'].push(novaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      senhaFormatada = this.formatarSenha(tipoSenha, this.senhasPrior);
      // this.senhaArray[tipoSenha].push(novaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      senhaFormatada = this.formatarSenha(tipoSenha, this.senhasExame);
      // this.senhaArray[tipoSenha].push(novaSenha);
    }

    const senha: Senha = {
      icon: this.selecionaIcone(tipoSenha),
      color: this.selecionaCor(tipoSenha),
      codigo: senhaFormatada,
      tm_geracao: this.formatarDataAtual(),
    };

    console.log(senha)
    this.senhas.push(senha);
  }

  selecionaIcone(tipoSenha: string): string {
    let icone: string = '';
    switch (tipoSenha) {
      case 'SG':
        return icone = 'home';
      case 'SE':
        return icone = 'document';
      case 'SP':
        return icone = 'accessibility';
    }
   return icone;
  }

  selecionaCor(tipoSenha: string): string {
    let icone: string = '';
    switch (tipoSenha) {
      case 'SG':
        return icone = 'dark';
        break;
      case 'SE':
        return icone = 'warning';
      case 'SP':
        return icone = 'primary';
    }
   return icone;
  }

  selecionaCodigo(tipoSenha: string): string {
    return '';
  }
}