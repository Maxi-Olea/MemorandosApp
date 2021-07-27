import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemorandosComponent } from './list-memorandos.component';

describe('ListMemorandosComponent', () => {
  let component: ListMemorandosComponent;
  let fixture: ComponentFixture<ListMemorandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemorandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemorandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
