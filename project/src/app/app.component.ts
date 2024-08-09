import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  StyleObject = {
    width: '10px',
  };

  updateStyleObject() {
    console.log('updateStyleObject');
    const currentWidth = parseInt(this.StyleObject.width, 10);
    const newWidth = currentWidth + 100;
    this.StyleObject = {
      width: `${newWidth}px`,
    };
  }
}
