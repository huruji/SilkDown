<template>
	<li class="navbar-item">
				<button title="Strikethrough" @click='insert'>
					<i class="fa fa-strikethrough"></i>
				</button>
			</li>
</template>

<script>
    import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '~~~~',
					startSymbolLen: 2,
					endSymbolLen: 2,
					updateStart: '~~',
					updateEnd:	'~~'
				}

                insertContent(insertDes);
			}
		}
	}
</script>