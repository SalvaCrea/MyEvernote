import './scss/app.scss';
// import { App } from './ts/app';
import { Component } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-root'
})
class App {
    title = "welcome on the Angular App"; 
}

platformBrowserDynamic().bootstrapModule(App)
  .catch(err => console.log(err));