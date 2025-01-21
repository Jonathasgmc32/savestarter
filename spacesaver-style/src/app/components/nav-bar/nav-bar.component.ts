import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [NgIf, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor(private router:Router, private authService:AuthGuardService){}
  menuVisible: boolean = false;
  username: string | null = null;
  isAuthenticated: boolean = false;
  ngOnInit(): void {
    const authToken = sessionStorage.getItem('auth-token');
    this.isAuthenticated = !!authToken;
    if (this.isAuthenticated) {
      this.username = sessionStorage.getItem('username'); 
    }
  }
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible; // Alterna o estado da visibilidade
  }

  @Output("navigate") onNavigate = new EventEmitter();
  navigate(Location:String){
    this.router.navigate([Location]);
  }
}
