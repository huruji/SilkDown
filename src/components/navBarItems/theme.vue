<template>
	<li class="navbar-item">
		<button title="theme" @click='changeTheme'>
			<i :class="['fa', themeicon]"></i>
		</button>
	</li>
</template>

<script>
    import insertContent from './../../utils/insertContent.js'
	export default{
		computed: {
			theme() {
				return this.$store.state.theme;
			},
			themeicon() {
				return this.theme === 'theme-day' ? 'fa-moon-o' : 'fa-sun-o'
			}
		},
		methods: {
			changeTheme() {
				this.$store.commit('CHANGE_THEME')
			}
		}
	}
</script>