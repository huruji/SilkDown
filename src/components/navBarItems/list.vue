<template>
	<li class="navbar-item">
		<button title="List" @click='insert'>
			<i class="fa fa-list-ul"></i>
		</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '\n- ',
					startSymbolLen: 3,
					endSymbolLen: 0,
					updateStart: '- ',
					updateEnd:	''
				}

                insertContent(insertDes);
			}
		}
	}
</script>