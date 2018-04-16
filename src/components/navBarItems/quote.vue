<template>
	<li>
		<button title="Quote" @click='insert("\n> ")'>
			<i class="fa fa-quote-left"></i>
		</button>
	</li>
</template>

<script>
    import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '\n> ',
					startSymbolLen: 3,
					endSymbolLen: 0,
					updateStart: '>',
					updateEnd:	''
				}

                insertContent(insertDes);

			}
		}
	}
</script>