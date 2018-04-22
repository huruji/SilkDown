<template>
	<nav :class="['nav', 'navbar', theme]">
		<ul class="navbar-item-container">
			<show-menu/>
			<bold/>
			<italic/>
			<my-link/>
			<quote/>
			<my-code/>
			<my-image/>
			<list/>
			<tasks/>
			<headline/>
			<underline/>
			<strikethrough/>
			<my-table/>
			<emoji/>
			<theme/>
			<fullscreen/>
			<preview/>
			<github/>
			<question/>
		</ul>
	</nav>
</template>

<script>
	import Bold from './../components/navBarItems/bold.vue'
	import MyCode from './../components/navBarItems/code.vue'
	import Emoji from './../components/navBarItems/emoji.vue'
	import Fullscreen from './../components/navBarItems/fullscreen.vue'
	import Github from './../components/navBarItems/github.vue'
	import Headline from './../components/navBarItems/headline.vue'
	import MyImage from './../components/navBarItems/image.vue'
	import Italic from './../components/navBarItems/italic.vue'
	import MyLink from './../components/navBarItems/link.vue'
	import List from './../components/navBarItems/list.vue'
	import Tasks from './../components/navBarItems/tasks.vue'
	import ShowMenu from './../components/navBarItems/menu.vue'
	import Preview from './../components/navBarItems/preview.vue'
	import Question from './../components/navBarItems/question.vue'
	import Quote from './../components/navBarItems/quote.vue'
	import Strikethrough from './../components/navBarItems/strikethrough.vue'
	import MyTable from './../components/navBarItems/table.vue'
	import Theme from './../components/navBarItems/theme.vue'
	import Underline from './../components/navBarItems/underline.vue'

	export default {
		computed: {
			theme() {
      			return this.$store.state.theme
    		}
		},
		components: {
			Bold,
			MyCode,
			Emoji,
			Fullscreen,
			Github,
			Headline,
			MyImage,
			Italic,
			MyLink,
			List,
			Tasks,
			ShowMenu,
			Preview,
			Question,
			Quote,
			Strikethrough,
			MyTable,
			Theme,
			Underline
		}
	}
</script>

<style lang="less">
	nav.navbar {
		box-sizing: border-box;
		height: 45px;
		z-index: 20;
		ul.navbar-item-container {
			height: 45px;
			min-width: 1000px;
			padding: 0;
			margin: 0;
			list-style: none;
			li.navbar-item {
				height: 45px;
				float: left;
				button {
					height: 45px;
					width: 45px;
					border: none;
					background: none;
					outline: none;
					transition: all ease .3s;
					&:active {
						background: #00796B;
					}
					.fa {
						color: #fff;
						font-size: 18px;
					}
				}
			}
		}
	}

	// theme-day
	nav.navbar.theme-day{
		background-color: #009688;
		box-shadow: 4px 3px 3px #aaa;
		ul.navbar-item-container {color: #fff;
			li.navbar-item {
				button{
					&:hover{
						background: #00897B;
					}
					.fa{
						color: #fff;
					}
					&.active{
						background: #00796B;
					}
				}

				&:first-child {
					border-right: 2px solid #00897B;
				}
				&:nth-last-child(2) {
					border-left: 2px solid #00897B;
				}
			}
		}
	}

	// theme-night
	nav.navbar.theme-night{
		background-color: #232323;
		box-shadow: 4px 3px 3px #1f1f1f;
		ul.navbar-item-container {
			li.navbar-item {
				button{
					&:hover{
						background: #3c3c3c;
					}
					.fa{
						color: #888;
					}
					&.active{
						background: #3c3c3c;
					}
				}

				&:first-child{
					border-right: 2px solid #3e3c3c;
				}
				&:nth-last-child(2){
					border-left: 2px solid #3e3c3c;
				}
			}
		}
	}
</style>