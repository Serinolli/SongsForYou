import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {

  nome: string | null = '';

  constructor() { }

  ngOnInit(): void {
    // if(localStorage.getItem('name') != null)
    // {
    //   this.nome = localStorage.getItem('name');
    // }
    
  }

  submitName(p: string): void {
    localStorage.setItem('name', p);
    this.nome = p;
  }

  onClickNotMe() : void { 
    this.nome = '';
    // localStorage.removeItem('name');
  }

  onClickStart () : void {
    console.log('App should start rn')
  }

}
