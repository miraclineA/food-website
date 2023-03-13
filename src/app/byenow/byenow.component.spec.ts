import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByenowComponent } from './byenow.component';

describe('ByenowComponent', () => {
  let component: ByenowComponent;
  let fixture: ComponentFixture<ByenowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByenowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
