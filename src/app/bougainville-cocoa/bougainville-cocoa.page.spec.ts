import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BougainvilleCocoaPage } from './bougainville-cocoa.page';

describe('BougainvilleCocoaPage', () => {
  let component: BougainvilleCocoaPage;
  let fixture: ComponentFixture<BougainvilleCocoaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BougainvilleCocoaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BougainvilleCocoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
