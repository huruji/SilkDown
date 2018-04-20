<template>
	<li class="navbar-item">
		<button title="Link" @click='insert'>
			<i class="fa fa-link"></i>
		</button>
	</li>
</template>

<script>
    import insertContent from './../../utils/insertContent.js'
	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '[Link](http://example.com/)',
					startSymbolLen: 7,
					endSymbolLen: 1,
					updateStart: '[',
					updateEnd:	'](http://example.com/)'
				}

                insertContent(insertDes);
			}
		}
	}
</script>