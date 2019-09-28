import { container, row } from "./src/components/container";
import header from "./src/components/header";
import hero from "./src/components/hero";
import link from "./src/components/link";
import feature from "./src/components/feature";
import image from "./src/components/image";
import {
  tabs,
  init as tabsInit,
  handleTab,
  demoTabs
} from "./src/components/tabs";

// Helpers
import { position as gridLocation } from "./src/helpers/grid-position";
import { divider as sectionDivider } from "./src/helpers/divider";

const paragraph = {
  long: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque`,
  short: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia impedit natus eveniet voluptatibus.`
};

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
          `<h3 style="font-weight:bold">BOLD STATEMENT</h3><p class="hero-style">${
            paragraph.long
          }<br/>
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
        `<p>${paragraph.long}</p>`,
        `<p>${paragraph.long}</p>`,
        `<p>${paragraph.long}</p>`
      ),
      row(`halves`, `<p style="${gridLocation(2)}">${paragraph.long}</p>`),
      row(
        `quarters`,
        `<p style="${gridLocation(1)}">${paragraph.short}</p>`,
        `<p style="${gridLocation(4)}">${paragraph.short},</p>`
      ),
      row(
        `fifths`,
        `<p style="${gridLocation(1)}">${paragraph.short}</p>`,
        `<p style="${gridLocation(2)}">${paragraph.short}</p>`,
        `<p style="${gridLocation(3)}">${paragraph.short}</p>`
      )
    ) +
    container(
      header(`featured cards`, `h2`),
      row(
        `thirds`,
        feature(
          {
            title: `Feature 1`,
            description: `${paragraph.long}`,
            location: `1`
          },
          false
        ),
        feature(
          {
            title: `Feature 2`,
            description: `${paragraph.long}`,
            location: `2`
          },
          false
        ),
        feature(
          {
            title: `Feature 3`,
            description: `${paragraph.long}`,
            location: `3`
          },
          true
        )
      ),
      sectionDivider()
    )
  );
}

// Images with text
export function imageExample() {
  return container(
    header(`image & text`, `h2`),
    row(
      `halves`,
      `<p style="${gridLocation(2)}">${paragraph.long}</p>`,
      image({
        source: `https://source.unsplash.com/`,
        alt: `Seoul at Night`,
        size: `230x230/?seoul,city`
      }),
      image({
        source: `https://source.unsplash.com/`,
        alt: `Busan at Night`,
        size: `230x230/?busan,city`
      }) + `<p style="${gridLocation(2)}">${paragraph.long}</p>`
    ),
    sectionDivider()
  );
}

export function tabExample() {
  return container(row(`full`, tabs(demoTabs(), `tabs`)));
}
