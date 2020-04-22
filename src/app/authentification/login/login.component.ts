import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private auth:AuthServiceService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

onConnexion(){
  let user = {
    username: this.loginForm.controls.username.value,
    password: this.loginForm.controls.password.value
  } as User;
  console.log(this.loginForm.value);
  this.auth.login(user).subscribe(
    (data)=>{
      this.router.navigate(['/dashboard']);
    },
    (error)=>{
        console.error();
      
    }
  )
}
}
