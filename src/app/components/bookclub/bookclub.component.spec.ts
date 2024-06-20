import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookclubComponent } from './bookclub.component';

describe('BookclubComponent', () => {
  let component: BookclubComponent;
  let fixture: ComponentFixture<BookclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookclubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
