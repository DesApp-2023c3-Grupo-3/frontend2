import { Sector } from "../components/Sectores";

const sectorCodesToName : any = {
  1:'Malvinas Argentinas',
  2:'Sector 6',
  3:'Sector E',
  4:'Origone A'
};

export function abbreviateSectorName(sectorName: string): string {
  const sectorAbbreviations: { [key: string]: string } = {
    'Malvinas Argentinas': 'MA',
    'Sector 6': 'S6',
    'Sector E': 'SE',
    'Origone A': 'OA',
  };

  if (sectorName in sectorAbbreviations) {
    return sectorAbbreviations[sectorName];
  }

  return sectorName;
}

export const convertCodesToSectors = (codes: number[]): Sector[] => {
  return codes.map((code) => {
    const name = sectorCodesToName[code];
    if (name) {
      return { id: code, name: name };
    } else {
      return { id: code, name: 'Sector no encontrado' };
    }
  });
};

