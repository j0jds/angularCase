import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appInputBackground]'
})

export class InputBackgroundDirective {
    @Input() appInputBackground: string = 'white';

    @HostBinding('style.backgroundColor') bgColor: string = '';

    @HostListener('focus')
    onFocus() {
        this.bgColor = this.appInputBackground;
    }

    @HostListener('blur')
    onBlur(){
        this.bgColor = 'white';
    }
}