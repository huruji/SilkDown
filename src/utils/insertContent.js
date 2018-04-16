export default function(insertDes) {
	let inputer = document.querySelector('#inputer')
	let startPosition = inputer.selectionStart
	let endPosition = inputer.selectionEnd
	let oldContent = inputer.value

	inputer.focus()

	if(startPosition === endPosition){
		const newContent = oldContent.substring(0, startPosition) + insertDes.content + oldContent.substring(endPosition, oldContent.length)

        inputer.value = newContent

		inputer.setSelectionRange(startPosition + insertDes.startSymbolLen, startPosition + insertDes.content.length - insertDes.endSymbolLen)
	} else {
		const newContent = oldContent.substring(0, startPosition) + insertDes.updateStart + oldContent.substring(startPosition, endPosition) + insertDes.updateEnd + oldContent.substring(endPosition, oldContent.length)

        inputer.value = newContent

        const len = endPosition + insertDes.updateEnd.length + insertDes.updateStart.length
		inputer.setSelectionRange(len,len)
	}
}