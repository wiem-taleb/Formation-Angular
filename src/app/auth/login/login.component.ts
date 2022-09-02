import { Component, OnInit } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MES_ROUTES } from '../../config/routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login(credentials: CredentialsDto): void {
    this.authService.login(credentials).subscribe({
      next: (loginResponse) => {
        this.toastr.success('Bienvenu dans votre espace');
        localStorage.setItem('token', loginResponse.id);
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: (erreur) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      },
    });
  }
}
