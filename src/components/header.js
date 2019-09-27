export default function header(headerText, tag = `h2`, style = `left`) {
  return `<div style=text-align:${style}><${tag}>${headerText}</${tag}></div>`;
}
