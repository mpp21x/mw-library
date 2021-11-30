import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwLibraryComponent } from './mw-library.component';

describe('MwLibraryComponent', () => {
  let component: MwLibraryComponent;
  let fixture: ComponentFixture<MwLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MwLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MwLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
