import { CustomButton} from "./components/CustomButton.js"


customElements.define('enidev-button', CustomButton);

const codeBlocks = document.querySelectorAll("div.highlight");



codeBlocks.forEach(el => {
	el.appendChild(document.createElement("enidev-button"))
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
