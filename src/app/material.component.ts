import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { HomeComponent } from './+home';

import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';

@Component({
  moduleId: module.id,
  selector: 'material-app',
  templateUrl: 'material.component.html',
  styleUrls: ['material.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MdIcon, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MdIconRegistry]
})
@Routes([
  { path: '/home', component: HomeComponent },
  { path: '/team', component: TeamComponent },
  { path: '/detail/:id', component: DetailComponent }
])
export class MaterialAppComponent {
  title = 'material works!';
}
