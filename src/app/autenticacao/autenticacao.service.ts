import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DevagramApiService } from '../compartilhado/servicos/devagram-api.service';
import { CredenciaisDevagram } from './credenciais-devagram.type';
import { RespostaLoginDevagram } from './resposta-login-devagram.type';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends DevagramApiService{

  constructor(
    protected _http: HttpClient,
    @Inject('DEVAGRAM_API_URL') private _devagramUrlApi: string,
    private router: Router
  ){
    super(_http, _devagramUrlApi)
  }

  async login(credenciais: CredenciaisDevagram): Promise<void>{
    const respostaLogin: RespostaLoginDevagram = await this.post('login', credenciais);

    if (!respostaLogin.token){
      throw new Error('Login inválido!');
    }

    localStorage.setItem('token', respostaLogin.token);
    localStorage.setItem('nome', respostaLogin.nome);
    localStorage.setItem('email', respostaLogin.email);

    //to do
    //pegar os dados complementares do usuário logado

    this.router.navigateByUrl('/');
  }

  estaLogado(): boolean{
    return localStorage.getItem('token') !== null;
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');

    //to do: remover os dados complementares no logout
    this.router.navigateByUrl('/login');
  }

  //criar método extra  que devolve infos do usuário logado
}
