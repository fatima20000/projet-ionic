import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

import { AjoutdirectModalComponent } from './ajoutdirect-modal.component';

describe('AjoutdirectModalComponent', () => {
  let component: AjoutdirectModalComponent;
  let fixture: ComponentFixture<AjoutdirectModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutdirectModalComponent ],
      imports: [IonicModule.forRoot(), AuthenticationService]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutdirectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
