import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.setItem("STATE", "false")
  }

}
