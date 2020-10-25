import { GuitarCollection, Guitar } from "../data/guitar-collection.model";

const fenderElec: Guitar[] = [
  {
    brand: "Fender",
    model: "Statocaster",
    releaseYear: 1954
  },
  {
    brand: "Fender",
    model: "Telecaster",
    releaseYear: 1950
  },
  {
    brand: "Fender",
    model: "JazzMaster",
    releaseYear: 1959
  }
];
const espElec: Guitar[] = [
  {
    brand: "ESP",
    model: "EC-1000",
    releaseYear: 2003
  },
  {
    brand: "ESP",
    model: "TE-401",
    releaseYear: 2010
  }
];
const taylorAcoustic: Guitar[] = [
  {
    brand: "Taylor",
    model: "Auditorium 1000",
    releaseYear: 1998
  },
  {
    brand: "Taylor",
    model: "Dreadnote",
    releaseYear: 2000
  }
];

export const fullGuitarCollection: GuitarCollection[] = [
  {
    type: "Electrical",
    guitars: [...fenderElec, ...espElec]
  },
  {
    type: "Acoustic",
    guitars: taylorAcoustic
  }
];
