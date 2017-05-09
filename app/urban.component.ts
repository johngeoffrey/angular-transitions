import { Component, HostBinding } from '@angular/core';
import {default as routerAnimations} from './route_animations';





@Component({
	moduleId: module.id,
  selector: 'urban',
  templateUrl : './urban.component.html',
  animations: [routerAnimations('routeAnimations')]
  
})






export class UrbanComponent {
  
  
@HostBinding('@routeAnimations')
    public routeAnimations = true;

  

}
