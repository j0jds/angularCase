import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})

export class CheckboxComponent {
  isActive: boolean = false;
  isApproved: boolean = false;

  onChange(isUserActive: boolean) {
    console.log('onChange', isUserActive);

    this.isActive = isUserActive;
  }
}
