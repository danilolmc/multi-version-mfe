import { Injector, NgModule, NgZone } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        AppComponent,
    ],
    providers: [
        (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone } : [],
    ],
    exports: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const ce = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('mfe2-element', ce);
    }
}
