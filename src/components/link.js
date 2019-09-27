export default function link(title, slug = `#`) {
  return `<a href="${slug}">
    ${title}
  </a>`;
}
