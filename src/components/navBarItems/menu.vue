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
			this.$store.dispatch('showMenu');
		}
	}
</script>