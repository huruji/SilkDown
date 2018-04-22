<template>
	<li class="navbar-item">
		<button title="task list" @click='insert'>
			<i class="fa fa-tasks"></i>
		</button>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'

	export default{
		methods: {
			insert() {
				let insertDes = {
					content: '- [ ] checked list ',
					startSymbolLen: 6,
					endSymbolLen: 1,
					updateStart: '- [ ] ',
					updateEnd:	''
				}

				insertContent(insertDes);

			}
		}
	}
</script>