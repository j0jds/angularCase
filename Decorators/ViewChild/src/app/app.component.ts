import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInput')
  meuInputEl!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit', this.meuInputEl);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.meuInputEl);

    this.meuInputEl.nativeElement.focus();
  }
}
