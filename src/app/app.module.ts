import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
