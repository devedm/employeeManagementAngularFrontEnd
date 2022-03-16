import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCreativa';

  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private authService: AuthService) { }

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
