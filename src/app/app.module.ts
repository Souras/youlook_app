import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { MainPage } from "../pages/main/main";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfirmDirective, ChangeColorDirective, ScrollTrackerDirective, onItemCreateDirective } from '../directives/testDirective'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MainPage,
    ConfirmDirective,
    ChangeColorDirective,
    ScrollTrackerDirective,
    onItemCreateDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
