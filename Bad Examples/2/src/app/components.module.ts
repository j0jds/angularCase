import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
    declarations: [
        ButtonComponent,
        CardComponent
    ],
    exports: [
        ButtonComponent,
        CardComponent
    ],
})
export class ComponentsModule { }