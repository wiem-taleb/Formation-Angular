import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  private cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', '1234', 40),
    new Cv(2, 'sellaouti', 'skan', 'bb', '', '12345', 4),
    new Cv(
      3,
      'ben salah',
      'ahmed',
      'dev',
      '                     ',
      '123456',
      20
    ),
  ];
  constructor(private http: HttpClient) {}
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  deleteCv(id: number): Observable<any> {
    /*     const params = new HttpParams().set('access_token',localStorage.getItem('token') ?? ''); */

    return this.http.delete<any>(API.cv + id);
  }
  findFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
