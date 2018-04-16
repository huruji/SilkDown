<template>
	<li>
		<button title="Code" @click='insert'>
				<i class="fa fa-code"></i>
			</button>
	</li>
</template>

<script>
	export default{
			insert() {
				let insertDes = {
					content: '`code`',
					startSymbolLen: 1,
					endSymbolLen: 1
				}

                let inputer = document.querySelector('#inputer')
				let startPosition = inputer.selectionStart
				let endPosition = inputer.selectionEnd
				let oldContent = inputer.value

				inputer.focus()

				const newContent = oldContent.subString(0, startPosition) + insertDes.content + oldContent.subString(endPosition, oldContent.length)

				inputer.setSelectionRange(startPosition + insertDes.startSymbolLen, startPosition + insertDes.length - endSymbolLen)

				this.$store.dispatch('textInput', newContent)
				this.$store.dispatch('saveToCache')
			}
	}
</script>