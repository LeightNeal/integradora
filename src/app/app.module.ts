import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { PrimeraPage } from '../pages/primera/primera';
import { MenuPage } from '../pages/menu/menu';
import { RetosPage } from '../pages/retos/retos';
import { LibrePage } from '../pages/libre/libre';
import { MemoriaPage } from '../pages/memoria/memoria';
import { RankingPage } from '../pages/ranking/ranking';
import { PerfilPage } from '../pages/perfil/perfil';
import { TutorialesPage } from '../pages/tutoriales/tutoriales';
import { Pantalla2Page } from '../pages/pantalla2/pantalla2';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    RegistrarsePage,
    PrimeraPage,
    MenuPage,
    RetosPage,
    LibrePage,
    MemoriaPage,
    RankingPage,
    PerfilPage,
    TutorialesPage,
    Pantalla2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegistrarsePage,
    PrimeraPage,
    MenuPage,
    RetosPage,
    LibrePage,
    MemoriaPage,
    RankingPage,
    PerfilPage,
    TutorialesPage,
    Pantalla2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
