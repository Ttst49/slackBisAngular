import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationCreationComponent } from './conversation-creation.component';

describe('ConversationCreationComponent', () => {
  let component: ConversationCreationComponent;
  let fixture: ComponentFixture<ConversationCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
