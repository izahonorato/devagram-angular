import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devagram-angular';


  public aoTrocarImagem(){
    console.log('Imagem alterada')
  }
}
