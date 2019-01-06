import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChildComponent } from './server-child.component';

describe('ServerChildComponent', () => {
  let component: ServerChildComponent;
  let fixture: ComponentFixture<ServerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
