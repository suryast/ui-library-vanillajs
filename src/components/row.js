export default function row(size, ...args) {
  //fifths, quarters, thirds, halves, full
  let markup = `<div class="grid-container ${size}">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  return markup;
}
