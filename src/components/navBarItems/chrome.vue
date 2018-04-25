<template>
	<li class="navbar-item">
		<button title="Chrome Extension" @click='redirect("https://chrome.google.com/webstore/detail/silkdown/kojpddcdcddckmdnimmodeaejonfefee")'>
			<i class="fa fa-chrome"></i>
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