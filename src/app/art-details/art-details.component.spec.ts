import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetailsComponent } from './art-details.component';

describe('ArtDetailsComponent', () => {
  let component: ArtDetailsComponent;
  let fixture: ComponentFixture<ArtDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDetailsComponent]
    });
    fixture = TestBed.createComponent(ArtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
