import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTabComponent } from './tool-tab.component';

describe('ToolTabComponent', () => {
  let component: ToolTabComponent;
  let fixture: ComponentFixture<ToolTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
