import { Component } from '@angular/core';

@Component({//Decorator
  selector: 'app-root',// será usado na forma de tags pro conteúdo poder ser renderizado na tela
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoteca';
}
