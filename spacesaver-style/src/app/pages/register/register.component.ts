import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm {
  name: FormControl,
  email: FormControl,
  cpf: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterForm>;
  constructor(
    private router:Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required,  Validators.min(0), Validators.max(99999999999)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  @Output("navigate") onNavigate = new EventEmitter();
  submit(){
    console.log(this.registerForm.value)
    this.loginService.register(this.registerForm.value.name, this.registerForm.value.cpf, this.registerForm.value.email, this.registerForm.value.password).subscribe({
      next: () => this.toastService.success("Cadastro feito com sucesso!"),
      error: () => this.toastService.error("Ocorreu algum erro durante o cadastro!")
    })
  }
  navigate(){
    this.router.navigate(["login"]);
  }

}
