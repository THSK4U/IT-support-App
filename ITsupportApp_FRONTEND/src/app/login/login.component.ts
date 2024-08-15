import { Component } from '@angular/core';
import {ApiService} from "../services/services/api.service";
import {PersonneDto} from "../services/models/personne-dto";
import {Router} from "@angular/router";
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authRequirest: PersonneDto = {username: '',password: ''};
  errorMsg: Array<string> = [];
  hidePassword = true;

  constructor(
    private router: Router,
    private authentication: ApiService,
    private tokenService: TokenService,
  ) {}

  Login() {
  this.errorMsg=[]; //return msg sur null
  this.authentication.login$Response({
    body: this.authRequirest
  }).subscribe({
    next: (result) => {
      this.tokenService.token = result.body.jwt as string
      this.router.navigate(['Admin'])
    },
    error: err => {
      console.log(err);
      if(err.error.ValidationError){
        this.errorMsg = err.error.ValidationError;
      }else {
        this.errorMsg.push("Veuillez vérifier votre nom d'utilisateur ou votre mot de passe.");
      }
    }
  })
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
