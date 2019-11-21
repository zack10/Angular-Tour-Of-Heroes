import { Component, OnInit, Input } from '@angular/core';
import { faMask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() logo: string;
  faMask = faMask;

  constructor() { }

  ngOnInit() {
  }

}
