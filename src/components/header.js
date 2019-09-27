export default function header(headerText, tag = `h2`) {
  // default is h2
  return `<${tag}>${headerText}</${tag}>`;
}
