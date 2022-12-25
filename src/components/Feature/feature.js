import header from "./header";
import { position as gridLocation } from "../../helpers/grid-position";
import { styleText, styleBorder } from "../../helpers/card-style";

export default function feature(feature, style) {
  return `<div class="feature" style="${gridLocation(
    feature.location
  )}; ${styleText(style)};">
    ${header(feature.title, `h5`, `center`)}
    <p style="${styleBorder(style)}">${feature.description}</p>
  </div>`;
}
