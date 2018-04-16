<template>
	<li>
		<button title="Menu" @click='showMenu'>
			<i class="fa fa-bars"></i>
		</button>
	</li>
</template>

<script>
	export default{
		methods: {
			showMenu() {
				this.$store.dispatch('showMenu');
			}
		}
	}
</script>