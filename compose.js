import { container, row } from "./src/components/container";
import header from "./src/components/Feature/header";
import hero from "./src/components/Hero/hero";
import link from "./src/components/link";
import feature from "./src/components/Feature/feature";
import image from "./src/components/Image/image";
import { tabs } from "./src/components/Tab/tab";
import { exampleTabs } from "./src/components/Tab/exampleHelper";
import { accordion, demoAccordions } from "./src/components/Accordion/accordion";
import { init as videoInit } from "./src/components/Video/video";
import { position as gridLocation } from "./src/helpers/grid-position";
import { divider as sectionDivider } from "./src/helpers/divider";

const EXAMPLE_TXT = {
  long: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias quos libero inventore quisquam vel, maiores ipsam eum dolorum maxime recusandae doloremque`,
  short: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia impedit natus eveniet voluptatibus.`
};

// Hero section
export const heroImages = () => {
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
            EXAMPLE_TXT.long
          }<br/>
          ${link(`Read More...`, `#home`)}</p>`
        )
      )
    )
  );
}

// Grid system using CSS grid
export const grids = () => {
  return (
    container(
      sectionDivider(),
      header(`grid system`, `h2`),
      row(
        `thirds`,
        `<p>${EXAMPLE_TXT.long}</p>`,
        `<p>${EXAMPLE_TXT.long}</p>`,
        `<p>${EXAMPLE_TXT.long}</p>`
      ),
      row(`halves`, `<p style="${gridLocation(2)}">${EXAMPLE_TXT.long}</p>`),
      row(
        `quarters`,
        `<p style="${gridLocation(1)}">${EXAMPLE_TXT.short}</p>`,
        `<p style="${gridLocation(4)}">${EXAMPLE_TXT.short},</p>`
      ),
      row(
        `fifths`,
        `<p style="${gridLocation(1)}">${EXAMPLE_TXT.short}</p>`,
        `<p style="${gridLocation(2)}">${EXAMPLE_TXT.short}</p>`,
        `<p style="${gridLocation(3)}">${EXAMPLE_TXT.short}</p>`
      )
    ) +
    container(
      header(`featured cards`, `h2`),
      row(
        `thirds`,
        feature(
          {
            title: `Feature 1`,
            description: `${EXAMPLE_TXT.long}`,
            location: `1`
          },
          false
        ),
        feature(
          {
            title: `Feature 2`,
            description: `${EXAMPLE_TXT.long}`,
            location: `2`
          },
          false
        ),
        feature(
          {
            title: `Feature 3`,
            description: `${EXAMPLE_TXT.long}`,
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
export const images = () => {
  return container(
    header(`image & text`, `h2`),
    row(
      `halves`,
      `<p style="${gridLocation(2)}">${EXAMPLE_TXT.long}</p>`,
      image({
        source: `https://source.unsplash.com/`,
        alt: `Seoul at Night`,
        size: `300x300/?seoul,city`
      })
    ),
    row(
      `halves`,
      `<p style="${gridLocation(1)}">${EXAMPLE_TXT.long}</p>`,
      image({
        source: `https://source.unsplash.com/`,
        alt: `Busan at Night`,
        size: `300x300/?busan,city`
      })
    ),
    sectionDivider()
  );
}

// Tabs
export const tabAccordions = () => {
  return (
    container(
      row(`full`, header(`accordions & tabs`, `h2`), tabs(exampleTabs(), `tabs`))
    ) + 
    container(
      row(`full`, accordion(demoAccordions())
    ), 
    sectionDivider())
  );
}

// Videos
export const videos = () => {
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
  );
}
