import { Directive, HostBinding } from "@angular/core"

@Directive({
    selector: '[appClass]',
})

export class ClassDirective {
    @HostBinding('attr.class') attrClass = 'meu-texto meu-size'
}