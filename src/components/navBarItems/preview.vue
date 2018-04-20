<template>
	<li class="navbar-item">
		<button title="Preview" @click='showPreview' :class="{'active': preview}">
			<i class="fa fa-columns"></i>
		</button>
	</li>
</template>

<script>
	export default{
		computed: {
      		preview() {
        		return this.$store.state.preview;
      		}
		},
		methods: {
			showPreview(){
				this.$store.commit('PREVIEW')
			}
		}
	}
</script>