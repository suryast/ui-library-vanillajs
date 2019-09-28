import { container, row } from "./src/components/container";
import header from "./src/components/header";
import hero from "./src/components/hero";
import link from "./src/components/link";
import feature from "./src/components/feature";
import image from "./src/components/image";
import { tabs, demoTabs } from "./src/components/tabs";
import { init as videoInit, videoPlayer } from "./src/components/video";

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
        size: `300x300/?seoul,city`
      })
    ),
    row(
      `halves`,
      `<p style="${gridLocation(1)}">${paragraph.long}</p>`,
      image({
        source: `https://source.unsplash.com/`,
        alt: `Busan at Night`,
        size: `300x300/?busan,city`
      })
    ),
    sectionDivider()
  );
}

export function tabExample() {
  return container(
    row(`full`, header(`accordions & tabs`, `h2`), tabs(demoTabs(), `tabs`))
  );
}

export function videoExample() {
  return container(
    row(
      `full`,
      header(`video`, `h2`),
      videoInit(
        `/sample.990d2386.mp4`,
        `Video by Miguel Á. Padriñán from Pexels`
      )
    ),
    sectionDivider()
  ); // Not sure why this is
}
