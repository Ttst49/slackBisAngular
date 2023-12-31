import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCreationComponent } from './channel-creation.component';

describe('ChannelCreationComponent', () => {
  let component: ChannelCreationComponent;
  let fixture: ComponentFixture<ChannelCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChannelCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
