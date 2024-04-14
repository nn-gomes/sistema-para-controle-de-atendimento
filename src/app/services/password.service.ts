import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  itens: string[] = ['Item 1', 'Item 2', 'Item 3'];
  
  constructor() { }

  senhas = [
    {
      icon: 'accessibility',
      color: 'primary',
      senha: '240401-SP01',
      tm_geracao: '2024-04-01 19:10:09',
    }, 
    {
      icon: 'accessibility',
      color: 'primary',
      senha: '240401-SP01',
      tm_geracao: '2024-04-01 19:10:09',
    }, 
  ]
}
