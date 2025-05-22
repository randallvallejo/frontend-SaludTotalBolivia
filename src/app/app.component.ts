import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HomeComponent, LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private title: Title) {
  }
  ngOnInit() {
    this.title.setTitle('Home');
  }
}