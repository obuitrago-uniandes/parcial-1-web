import { Plant } from './plant.model';

describe('Plant', () => {
  it('should create an instance', () => {
    expect(
      new Plant(
        1,
        'nombre_comun',
        'nombre_cientifico',
        'tipo',
        120,
        'clima',
        'sustrato'
      )
    ).toBeTruthy();
  });
});
