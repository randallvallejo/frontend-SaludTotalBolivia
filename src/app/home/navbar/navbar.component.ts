import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { LoggedUserInterface } from '../../login/interfaces/logged-user.interface';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private title: Title,
              private authService: AuthService
  ) {
  }
  loggedUser!: LoggedUserInterface;
  isLogged: boolean = false;
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn();
    if(this.isLogged) {
      this.loggedUser = this.authService.getLoggedUser();
    }
  }
  logout() {
    this.authService.logout();
    this.isLogged = false;
  }
}
