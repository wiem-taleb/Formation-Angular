import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor(private toaster: ToastrService) {
    this.observable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable
      .pipe(
        map((x) => x * 3),
        filter((x) => x % 2 == 0)
      )
      .subscribe({
        next: (entier) => {
          this.toaster.info('' + entier);
        },
        error: (e) => {
          this.toaster.error('Erreur');
        },
        complete: () => {
          this.toaster.warning('BOOM');
        },
      });
  }
  observable: Observable<number>;
  ngOnInit(): void {}
}
