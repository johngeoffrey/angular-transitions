import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';

import { AppComponent }  	from './app.component';
import { HomeComponent } 	from './home.component';
import { TreesComponent }	from './trees.component';
import { UrbanComponent }	from './urban.component';

import { AppRoutingModule }	from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, TreesComponent, UrbanComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
	
}
