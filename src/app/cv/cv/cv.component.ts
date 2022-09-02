import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv | null = null; */
  now = new Date();
  cvs: Cv[] = [];
  nbClick = 0;
  /*   sayHelloService = new SayHelloService();
   */ constructor(
    private cvService: CvService,
    private logger: LoggerService,
    private sayHelloService: SayHelloService,
    private toastr: ToastrService /*     private todoService: TodoService */
  ) {}

  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(
          `Les données affichées sont fake, veuillez contacter l'admin`
        );
      },
    });
    this.logger.log('cc je suis le CvComponent');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech :)');
    this.cvService.selectCv$.pipe(distinctUntilChanged()).subscribe({
      next: () => {
        this.nbClick++;
      },
    });
  }
  /*   getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
 */
}
