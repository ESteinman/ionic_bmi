import { MyApp } from './app.component'
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing'
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

describe ('AppComponent', () => {
    let component;

    TestBed.configureTestingModule({
        declarations: [MyApp],
        imports: [
            IonicModule.forRoot(MyApp)
        ],

})