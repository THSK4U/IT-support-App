




import { Component } from '@angular/core';
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private service: TokenService,
  ) {
  }

  logout() {
    this.service.logout();
  }

}
