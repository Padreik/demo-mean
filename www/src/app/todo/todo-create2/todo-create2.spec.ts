import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreate2 } from './todo-create2';

describe('TodoCreate2', () => {
  let component: TodoCreate2;
  let fixture: ComponentFixture<TodoCreate2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCreate2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCreate2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
