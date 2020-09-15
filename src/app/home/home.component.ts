import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 isLoading : boolean = true
  constructor() { }

  number: number = 360;
  value = 60;
  add() {
    this.number+=20;
  }

  remove() {
    if (this.number > 21) this.number-=20;
  }

  ngOnInit(): void {
    this.typeWriter()
  }


  

 typeWriter() {

  var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(this.typeWriter, speed);
  }
}
  

}
