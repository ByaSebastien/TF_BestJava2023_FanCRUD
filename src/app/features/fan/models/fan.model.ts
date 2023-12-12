export interface SerieModel {
  title: string;
}

export interface FanModel {
  id: number;
  name: string;
  birthdate: Date;
  series: SerieModel[];
}

export interface FanForm {
  name: string;
  birthdate: Date;
  series: SerieModel[];
}

export interface FanDTO {
  id: number;
  name: string;
  birthdate: Date;
}
