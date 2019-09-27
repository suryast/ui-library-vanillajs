import header from "./src/components/header";
import container from "./src/components/container";
import row from "./src/components/row";
import position from "./src/components/grid-position";

export default function library() {
  return container(
    header(`JS Component Library`, `h1`),
    header(`CSS Grid System`, `h2`),
    row(
      `thirds`,
      `<p class="border-bottom_thick">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
      `<p class="border-bottom_thick">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
      `<p class="border-bottom_thick">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
    ),
    row(
      `halves`,
      `<p class="border-bottom_thick" ${position(
        2
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
      `<p class="border-bottom_thick">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
    ),
    row(
      `fifths`,
      `<p class="border-bottom_thick" ${position(
        1
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`,
      `<p class="border-bottom_thick" ${position(
        4
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`,
      `<p class="border-bottom_thick" ${position(
        5
      )}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`
    )
  );
}
