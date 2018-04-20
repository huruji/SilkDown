<template>
	<li class="navbar-item">
		<button title="Table" @click='insert'>
			<i class="fa fa-th"></i>
		</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '\n\n| title | title | title |\n| --- | --- | --- |\n| item | item | item |',
					startSymbolLen: 4,
					endSymbolLen: 61,
					updateStart: '| ',
					updateEnd:	'| title | title |\n| --- | --- | --- |\n| item | item | item |'
				}

                insertContent(insertDes);
			}
		}
	}
</script>