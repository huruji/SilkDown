<template>
	<li>
		<button title="Image" @click='insert'>
			<i class="fa fa-picture-o"></i>
		</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'
	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '![Img](http://example.com/)',
					startSymbolLen: 7,
					endSymbolLen: 1,
					updateStart: '![',
					updateEnd:	'](http://example.com/)'
				}

                insertContent(insertDes);
			}
		}
	}
</script>