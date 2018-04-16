<template>
	<li>
		<button title="Bold" @click='insert'>
			<i class="fa fa-bold"></i>
		</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '**Bold**',
					startSymbolLen: 2,
					endSymbolLen: 2,
					updateStart: '**',
					updateEnd:	'**'
				}

				insertContent(insertDes);

			}
		}
	}
</script>