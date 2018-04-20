<template>
	<li class="navbar-item">
		<button title="Code" @click='insert'>
				<i class="fa fa-code"></i>
			</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '`code`',
					startSymbolLen: 1,
					endSymbolLen: 1,
					updateStart: '`',
					updateEnd:	'`'					
				}

                insertContent(insertDes);
			}
		}
	}
</script>
<style>
	
</style>