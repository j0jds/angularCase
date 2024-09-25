import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;
  // constructor(private readonly _elRef: ElementRef) { }

  ngOnInit() {
      // console.log(this._elRef);
      // this._elRef.nativeElement.querySelector('#minha-outra-div');
  }
  ngAfterViewInit() {
    // this.divEl.nativeElement.style.backgroundColor = 'orange';
    // this.divEl.nativeElement.textContent = 'Sou uma div!';
    // this.divEl.nativeElement.classList.add('minha-classe');
  }
  createElement() {
    // const novaDiv = document.createElement('div');

    // novaDiv.textContent = 'Sou a nova div!'
    // novaDiv.classList.add('bg-red');

    // this._elRef.nativeElement.appendChild(novaDiv);

  }
  

}
