import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Injectable, forwardRef, Inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

import '@material/textfield';
import  '@material/ripple';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));









