import container from "./src/components/container";
import header from "./src/components/header";
import hero from "./src/components/hero";
import row from "./src/components/row";
import link from "./src/components/link";
import feature from "./src/components/feature";
import image from "./src/components/image";

// Helpers
import { position as gridLocation } from "./src/helpers/grid-position";
import { divider as sectionDivider } from "./src/helpers/divider";

// Hero section
export function heroExample() {
  return (
    container(
      header(`Vanilla JS Component Library`, `h1`),
      header(`hero`, `h2`)
    ) +
    hero(
      container(
        row(
          `full`,
          `<h3 style="font-weight:bold">BOLD</h3><p class="hero-style">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque.<br/>
          ${link(`Read More...`, `#home`)}</p>`
        )
      )
    )
  );
}

// Grid system using CSS grid
export function gridExample() {
  return (
    container(
      sectionDivider(),
      header(`grid system`, `h2`),
      row(
        `thirds`,
        `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
        `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`,
        `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
      ),
      row(
        `halves`,
        `<p style="${gridLocation(
          2
        )}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias.</p>`
      ),
      row(
        `fifths`,
        `<p style="${gridLocation(
          1
        )}">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`,
        `<p style="${gridLocation(
          2
        )}">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`,
        `<p style="${gridLocation(
          5
        )}">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`
      )
    ) +
    container(
      header(`featured cards`, `h2`),
      row(
        `thirds`,
        feature(
          {
            title: `Feature 1`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem tenetur molestiae dolorum ipsa obcaecati quasi autem exercitationem voluptas ad. Ut aut libero sed facilis deleniti laudantium excepturi magnam velit!`,
            location: `1`
          },
          false
        ),
        feature(
          {
            title: `Feature 2`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem tenetur molestiae dolorum ipsa obcaecati quasi autem exercitationem voluptas ad. Ut aut libero sed facilis deleniti laudantium excepturi magnam velit!`,
            location: `2`
          },
          false
        ),
        feature(
          {
            title: `Feature 3`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem tenetur molestiae dolorum ipsa obcaecati quasi autem exercitationem voluptas ad. Ut aut libero sed facilis deleniti laudantium excepturi magnam velit!`,
            location: `3`
          },
          true
        )
      ) + sectionDivider()
    )
  );
}

// Accordian and Tabs
export function paginatedExample() {
  return container(
    header(`image & text`, `h2`),
    row(
      `halves`,
      `<p style="${gridLocation(
        2
      )}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>`,
      image({
        source: `https://source.unsplash.com/`,
        alt: `Tokyo at Night`,
        size: `400x400/?seoul,city`
      }),
      image({
        source: `https://source.unsplash.com/`,
        alt: `Tokyo at Night`,
        size: `400x400/?busan,city`
      }) +
        `<p style="${gridLocation(
          2
        )}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque. Ducimus deleniti rem facilis. Error obcaecati modi alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>`
    ),
    sectionDivider()
  );
}
