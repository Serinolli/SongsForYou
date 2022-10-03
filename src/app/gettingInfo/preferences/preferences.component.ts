import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'src/app/base/components/modal/modal.component';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreferencesComponent implements AfterViewInit {
  @ViewChild(ModalComponent) modal: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.modal.toggle();
  }

}
