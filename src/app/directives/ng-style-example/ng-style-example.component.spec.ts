import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExampleComponent } from './ng-style-example.component';

describe('NgStyleExampleComponent', () => {
  let component: NgStyleExampleComponent;
  let fixture: ComponentFixture<NgStyleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
