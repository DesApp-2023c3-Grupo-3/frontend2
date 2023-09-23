export function abbreviateSectorName(sectorName: string): string {
    const sectorAbbreviations: { [key: string]: string } = {
      "Edificio Malvinas": "MA",
      "Sector 6": "S6",
      "Sector E": "SE",
      "Origone A": "OA",
    };
  
    if (sectorName in sectorAbbreviations) {

      return sectorAbbreviations[sectorName];
    }
  
    return sectorName;
  }
  
  