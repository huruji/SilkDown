<template>
	<li>
		<button title="Underline" @click='insert("\n\n---\n\n")'>
			<i class="fa fa-underline"></i>
		</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'
	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '\n\n---\n\n',
					startSymbolLen: 7,
					endSymbolLen: 0,
					updateStart: '\n\n---\n\n',
					updateEnd:	''
				}

                insertContent(insertDes);

			}
		}
	}
</script>