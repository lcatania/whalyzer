import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as neutralinojs from "@neutralinojs/lib";

declare global {
  const Neutralino: typeof neutralinojs
}

Neutralino.init();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
