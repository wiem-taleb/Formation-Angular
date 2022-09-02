import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MES_ROUTES } from '../../config/routes.config';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.findCvById(+params['id']).subscribe({
        next: (cv) => {
          this.cv = cv;
        },
        error: (e) => {
          this.router.navigate([MES_ROUTES.cv]);
        },
      });
    });
  }
  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: (response) => {
          this.router.navigate([MES_ROUTES.cv]);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
