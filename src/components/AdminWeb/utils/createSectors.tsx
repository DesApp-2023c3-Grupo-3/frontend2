export const createSectors = (advertising: Advertising) =>
  advertising.advertisingSectors
    .map((sector) => sector.sector.topic.toLocaleUpperCase())
    .join('-');
