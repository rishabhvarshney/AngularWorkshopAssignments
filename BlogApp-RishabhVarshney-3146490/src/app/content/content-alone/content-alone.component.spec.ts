import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAloneComponent } from './content-alone.component';

describe('ContentAloneComponent', () => {
  let component: ContentAloneComponent;
  let fixture: ComponentFixture<ContentAloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
