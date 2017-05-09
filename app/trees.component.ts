import { Component, HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';
import {default as routerAnimations} from './route_animations';





@Component({
	moduleId: module.id,
  selector: 'trees',
  templateUrl : './trees.component.html',
  animations: [routerAnimations('routeAnimations')]
  
})






export class TreesComponent {
  
  @HostBinding('@routeAnimations')
    public routeAnimations = true;
  

}
