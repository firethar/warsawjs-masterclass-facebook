import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { PostListComponent } from 'src/app/shared/components/post-list/post-list.component';
import { PostListItemComponent } from 'src/app/shared/components/post-list-item/post-list-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        PostListComponent,
        PostListItemComponent
      ],
      imports: [
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
