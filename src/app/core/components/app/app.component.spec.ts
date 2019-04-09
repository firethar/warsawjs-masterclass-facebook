import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture = null;
  let component = null;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    $component = fixture.debugElement.nativeElement;

  }));

  afterEach(() => {
    $component.remove();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'warsawjs-masterclass-facebook'`, () => {
    expect(component.title).toEqual('warsawjs-masterclass-facebook');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect($component.querySelector('h1').textContent).toContain('Facebook');
  });
});
