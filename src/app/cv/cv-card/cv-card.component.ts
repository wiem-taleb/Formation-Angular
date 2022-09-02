import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,
    private cvService: CvService
  ) {}
  ngOnInit(): void {
    this.cvService.selectCv$.pipe(distinctUntilChanged()).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
    });
  }
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toaster.success(
          `Le cv de ${this.cv.firstname} ${this.cv.name} a été embauché avec succès`
        );
      } else {
        this.toaster.warning(
          `Le cv de ${this.cv.firstname} ${this.cv.name} est déjà pré embauché`
        );
      }
    }
  }
}
