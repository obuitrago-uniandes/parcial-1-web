import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantsService } from 'src/app/services/plants.service';
import { Plant } from 'src/app/models/plant.model';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
      providers: [PlantsService],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const plant = new Plant(
        i + 1,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.helpers.arrayElement(['Interior', 'Exterior']),
        faker.datatype.number({ max: 250 }),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table', () => {
    expect(fixture.debugElement.queryAll(By.css('table')).length).toEqual(1);
  });

  it('should have table header', () => {
    expect(fixture.debugElement.queryAll(By.css('thead')).length).toEqual(1);
  });

  it('should have 3 columns <tr>', () => {
    expect(fixture.debugElement.queryAll(By.css('tr')).length).toEqual(3);
  });
});
