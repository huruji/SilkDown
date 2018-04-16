<template>
	<li>
		<button title="Fullscreen" @click='showFullscreen' :class="{'active': fullscreen}">
			<i class="fa fa-arrows-alt"></i>
		</button>
	</li>
</template>

<script>
	export default{
		computed: {
			fullscreen() {
        		return this.$store.state.fullscreen;
      		}
		},
		methods: {
			showFullscreen(){
				this.$store.commit('FULLSCREEN')
			},
		}
	}
</script>