import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular'
  name = 'joy'
  width = 200
  constructor() {

  }

  updateName(newName: string) {
    this.name = newName
  }
  clicked(val: number) {
    console.log(val)
  }
}
// function AppComponent() {
//   this.title = ""
//   document.getElementsByTagName('p')[0].innerHTML = this.title
// }
