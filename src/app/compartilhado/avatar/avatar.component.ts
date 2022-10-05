import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() public src?: string;
  @Input() public classeCss: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  //se o usuario nao passar imagem, será colocado um avatar padrão
  public obterAvatar(): string {
    if(this.src){
      return this.src;
    }
    return 'assets/imagens/avatar.svg'
  }

}
