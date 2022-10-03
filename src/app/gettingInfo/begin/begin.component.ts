import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {

  nome: string | null = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitName(p: string): void {
    localStorage.setItem('name', p);
    this.nome = p;
  }

  onClickNotMe() : void { 
    this.nome = '';
  }

  onClickStart () : void {
    this.router.navigate(['info/preferences']);
  }

}
