import { Component } from '@angular/core';
import { MdSidenav } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdCard } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'material-app',
  templateUrl: 'material.component.html',
  styleUrls: ['material.component.css'],
  directives: [MdSidenav, MdToolbar, MdCard]
})
export class MaterialAppComponent {
  title = 'material works!';
}
