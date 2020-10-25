export interface Guitar {
  brand: string;
  model: string;
  releaseYear: number;
}

export interface GuitarCollection {
  type: string;
  guitars: Guitar[];
}
