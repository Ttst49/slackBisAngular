import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCreationComponent } from './group-creation.component';

describe('GroupCreationComponent', () => {
  let component: GroupCreationComponent;
  let fixture: ComponentFixture<GroupCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
