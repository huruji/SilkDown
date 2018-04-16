<template>
	<li>
		<button title="Bold" @click='insert'>
			<i class="fa fa-bold"></i>
		</button>
	</li>
</template>

<script>
	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '**Bold**',
					startSymbolLen: 2,
					endSymbolLen: 2
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
	}
</script>