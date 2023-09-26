import { cellToLatLng, getResolution, latLngToCell } from "h3-js";
import { H3_RESOLUTIONS } from "./const";

const { SIX_HUNDRED_SQ_MILES } = H3_RESOLUTIONS;

export const convert = ({ lat = 0, lng = 0, res = SIX_HUNDRED_SQ_MILES }) => {
  const h3cell = latLngToCell(lat, lng, res);

  return {
    h3cell,
    h3resolution: getResolution(h3cell),
    h3center: cellToLatLng(h3cell),
    inputs: [lat, lng, res]
  };
};
