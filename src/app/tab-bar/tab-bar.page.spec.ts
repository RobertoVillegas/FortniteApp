import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabBarPage } from './tab-bar.page';

describe('TabBarPage', () => {
  let component: TabBarPage;
  let fixture: ComponentFixture<TabBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
