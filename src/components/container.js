export function container(...args) {
  let markup = `<div class="container">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  return markup;
}

export function row(size, ...args) {
  //fifths, quarters, thirds, halves, full
  let markup = `<div class="grid-container ${size}">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  return markup;
}
