import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { MaterialToolbarModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { PageComponent } from './page/page.component';
import { ContentService } from '../services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   // MatSliderModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule 
    //MatCardHeader, 
    //MatCardContent, 
   // MatCardTitle
  ///  MatToolbarModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
