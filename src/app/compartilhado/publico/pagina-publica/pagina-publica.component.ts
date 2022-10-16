import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagina-publica',
  templateUrl: './pagina-publica.component.html',
  styleUrls: ['./pagina-publica.component.scss']
})
export class PaginaPublicaComponent implements OnInit {

  @Input() classeCssLogo: string = '';
  @Input() classeCssCustomizada: string = '';
  @Input() textoBotaoSubmit: string ='';
  @Output() submeterFormulario: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public aoSubmeter(){
    this.submeterFormulario.emit();
  }

}
