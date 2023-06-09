import { CustomButton} from "./components/CustomButton.js"


customElements.define('enidev-button', CustomButton);

const codeBlocks = document.querySelectorAll("div.highlight");

const template = document.createElement("template");
template.innerHTML = /*html*/`
<enidev-button></enidev-button>
<enidev-button data-btn="codepen"></enidev-button>
`

// const BtnCopy = document.createElement("enidev-button");
// const btnCodepen = document.createElement("enidev-button");

codeBlocks.forEach(el => {
	el.appendChild(template.content.cloneNode(true));
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  $('.dropdown-toggle').dropdown()
})
