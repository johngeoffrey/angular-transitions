import { Component, HostBinding } from '@angular/core';
import {default as routerAnimations} from './route_animations';



@Component({
	moduleId: module.id,
  selector: 'home',
  templateUrl : './home.component.html',
  animations: [routerAnimations('routeAnimations')]
  
})



export class HomeComponent {
  
  
@HostBinding('@routeAnimations')
    public routeAnimations = true;
  
 
    
  

}
