import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // this.modal.toggle()
  }

}
