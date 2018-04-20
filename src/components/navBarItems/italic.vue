<template>
	<li class="navbar-item">
		<button title="Italic" @click='insert'>
			<i class="fa fa-italic"></i>
		</button>
	</li>
</template>

<script>
    import insertContent from './../../utils/insertContent.js'
	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '*Italic*',
					startSymbolLen: 1,
					endSymbolLen: 1,
					updateStart: '*',
					updateEnd:	'*'
				}

                insertContent(insertDes);
			}
		}
	}
</script>