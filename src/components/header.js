export default function header(headerText, tag = `h2`, style = `left`) {
  return `<div class="header" style=text-align:${style}><${tag}>${headerText}</${tag}></div>`;
}
