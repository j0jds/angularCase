import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
})
export class FocusSecondInput implements OnInit {
  // @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;
  // constructor(private readonly _elRef: ElementRef) { }

  constructor(private _elRef: ElementRef) {}

  ngOnInit(): void {
    const inputList = this._elRef.nativeElement.querySelectorAll(
      'input'
    ) as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].focus();
    }
  }
}
