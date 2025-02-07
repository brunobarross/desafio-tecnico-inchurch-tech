import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBaseComponent } from './layout-base.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from '../auth/services/auth.service';
import { MessageService } from 'primeng/api';
import { provideRouter } from '@angular/router';

describe('LayoutBaseComponent', () => {
  let component: LayoutBaseComponent;
  let fixture: ComponentFixture<LayoutBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBaseComponent],
      providers: [
        AuthService,
        provideHttpClient(withFetch()),
        provideRouter([]),
        MessageService,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
