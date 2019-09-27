import container from "./src/components/container";
import header from "./src/components/header";
import hero from "./src/components/hero";
import row from "./src/components/row";

import { position as gridLocation } from "./src/helpers/grid-position";

export default function library() {
  return container(
    header(`Vanilla JS Component Library`, `h1`),
    header(`Hero`, `h2`),
    hero(
      `#hero`,
      row(
        `full`,
        `<h3 style="font-weight:bold">BOLD HERO HEADER</h3><p class="hero-style">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
      )
    ),
    header(`Grid System`, `h2`),
    row(
      `thirds`,
      `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
      `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
      `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
    ),
    row(
      `halves`,
      `<p ${gridLocation(
        2
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
      `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
    ),
    row(
      `fifths`,
      `<p ${gridLocation(
        1
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`,
      `<p ${gridLocation(
        4
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`,
      `<p ${gridLocation(
        5
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`
    ),
    `<div class="border-bottom_thin"></div>`
  );
}
