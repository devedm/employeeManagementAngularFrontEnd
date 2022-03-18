import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    const formValues = this.loginFormGroup.value; // retornar json con email y password
    // Obserbable
    this.authService.login(formValues.email, formValues.password).subscribe({
      next: (response) => {
        // respuesta success
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // finally
      }
    }); // promise.then
  }
}
