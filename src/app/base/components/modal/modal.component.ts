import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [

    // fundo escuro
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: .5 })),
      ]),

      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    
    // animação na parte branca do modal
    trigger('modal', [
      transition(':enter', [
        style({ top: -999 }),
        animate('500ms', style({ top: '50%' })),
      ]),

      transition(':leave', [
        animate('250ms', style({ top: -999 }))
      ])
    ]),
  ]
})

export class ModalComponent implements OnInit {
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
