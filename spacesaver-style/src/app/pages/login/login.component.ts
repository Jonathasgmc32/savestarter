import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  constructor(
    private router:Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  @Output("navigate") onNavigate = new EventEmitter();
  submit(){
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {this.toastService.success("Login feito com sucesso!");
        this.router.navigate(["home"]);
      },
      error: () => this.toastService.error("Ocorreu algum erro durante o login!")
    })
  }
  navigate(){
    this.router.navigate(["register"]);
  }

}
