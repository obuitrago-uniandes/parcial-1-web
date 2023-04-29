import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant.model';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
  constructor(private plantService: PlantsService) {}
  ngOnInit(): void {
    this.getPlants();
  }
  getPlants(): void {
    this.plantService.getPlants().subscribe((p) => {
      this.plants = p;
    });
  }
  get numberOfIndoorPlants() {
    return this.plants.filter(q => q.tipo === 'Interior').length;
  }

  get numberOfOutdoorPlants() {
    return this.plants.filter(q => q.tipo === 'Exterior').length;
  }
}
