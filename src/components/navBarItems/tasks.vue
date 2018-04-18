<template>
	<li>
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
					content: '- [ ] ',
					startSymbolLen: 6,
					endSymbolLen: 0,
					updateStart: '- [ ] ',
					updateEnd:	''
				}

				insertContent(insertDes);

			}
		}
	}
</script>