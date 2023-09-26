import yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import { H3_RESOLUTIONS } from './src/const';
import { convert } from "./src/convert";

const { SIX_HUNDRED_SQ_MILES } = H3_RESOLUTIONS;

const props = yargs()
  .options({
    lat: { description: 'Latitude', type: 'number', nargs: 1, default: 0 },
    lng: { description: 'Longitude', type: 'number', nargs: 1, default: 0 },
    res: { description: 'H3 Resolution', type: 'number', nargs: 1, default: SIX_HUNDRED_SQ_MILES },
  })
  .epilog('See https://h3geo.org/docs for more info')
  .parse(hideBin(Bun.argv));

const geodata = convert(props);

console.log(geodata);