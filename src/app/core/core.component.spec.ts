import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CoreComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'warsawjs-masterclass-facebook'`, () => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('warsawjs-masterclass-facebook');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to warsawjs-masterclass-facebook!');
  });
});
