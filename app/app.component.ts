import { Component, HostBinding, ViewChild, ElementRef,  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
	<nav>
		<a routerLink="/home">Home</a>
		<a routerLink="/trees">Trees</a>
		<a routerLink="/urban">Urban</a>
	</nav>
  <router-outlet></router-outlet>`
  
})
export class AppComponent  { 
	changeRoute(routeValue)
	{
	   console.log(routeValue);
	   this.status = routeValue;
	}
	
	public status;
	
	constructor(public router: Router) {
	}
	
	
	
	
 }
