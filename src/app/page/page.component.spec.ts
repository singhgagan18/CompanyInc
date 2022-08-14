import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/services/content.service';
import { PageComponent } from './page.component';


describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;
  const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: PageComponent, data: {
      page: 'home'
    }},
    {path: 'about', component: PageComponent, data: {
      page: 'about'
    }},
    {path: 'ourCustomers', component: PageComponent, data: {
      page: 'ourCustomers'
    }},
    {path: 'ourServices', component: PageComponent, data: {
      page: 'ourServices'
    }},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [ PageComponent ],
      providers: [ContentService]
    })
    .compileComponents();
  });

  beforeEach(() => {   
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
