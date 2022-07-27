import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/guards/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  isLoggedIn: Boolean = this.authService.isLoggedIn();

  constructor(private authService: AuthService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm.controls['userName'].setValue(localStorage.getItem('userName'));
    this.loginForm.controls['password'].setValue(localStorage.getItem('password')); 
  }

  onSubmit(): void {
    // Process checkout data here
    if (this.loginForm.valid) {
      this.authService.login('admin');
      this.isLoggedIn = this.authService.isLoggedIn()
    }


  }

}
