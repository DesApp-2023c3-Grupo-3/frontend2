import { Screen } from "../store/useScreenFilters";

export function getSectores(sectors: Screen[]) {
    const mappedSectors = sectors.map(sector => sector.sectorTitle)
    return mappedSectors.filter((item,index) => mappedSectors.indexOf(item) === index)
}