import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/base/components/modal/modal.component';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreferencesComponent implements AfterViewInit {
  @ViewChild(ModalComponent) modal: any;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.modal.toggle();
  }

  onClickConfirmar(): void {
    this.router.navigate(['conexao/spotify'])
    this.modal.toggle();
  }

  onClickCancelar(): void {
    this.modal.toggle();
  }

}
