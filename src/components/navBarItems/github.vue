<template>
	<li class="navbar-item">
		<button title="Github" @click='redirect("https://github.com/huruji/SilkDown")'>
			<i class="fa fa-github"></i>
		</button>
	</li>
</template>

<script>
	export default{
		methods: {
			redirect (url) {
				window.open(url, '_blank')
			},
		}
	}
</script>