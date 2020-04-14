import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignoutComponent } from './user-signout.component';

describe('UserSignoutComponent', () => {
  let component: UserSignoutComponent;
  let fixture: ComponentFixture<UserSignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
