import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/app.component";

@NgModule({
    declarations: [
        CounterComponent,
    ],
    exports: [
        CounterComponent,
    ],
    
})


export class CounterModule { }