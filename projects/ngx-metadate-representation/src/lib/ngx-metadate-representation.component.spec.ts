import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMetadateRepresentationComponent } from './ngx-metadate-representation.component';

describe('NgxMetadateRepresentationComponent', () => {
  let component: NgxMetadateRepresentationComponent;
  let fixture: ComponentFixture<NgxMetadateRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMetadateRepresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMetadateRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
