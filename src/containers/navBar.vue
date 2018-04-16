<template>
	<nav class="navbar">
		<ul>
			<show-menu/>
			<bold/>
			<italic/>
			<link/>
			<quote/>
			<my-code/>
			<my-image/>
			<list/>
			<headline/>
			<underline/>
			<strikethrough/>
			<my-table/>
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
	import Fullscreen from './../components/navBarItems/fullscreen.vue'
	import Github from './../components/navBarItems/github.vue'
	import Headline from './../components/navBarItems/headline.vue'
	import MyImage from './../components/navBarItems/image.vue'
	import Italic from './../components/navBarItems/italic.vue'
	import Link from './../components/navBarItems/link.vue'
	import List from './../components/navBarItems/list.vue'
	import ShowMenu from './../components/navBarItems/menu.vue'
	import Preview from './../components/navBarItems/preview.vue'
	import Question from './../components/navBarItems/question.vue'
	import Quote from './../components/navBarItems/quote.vue'
	import Strikethrough from './../components/navBarItems/strikethrough.vue'
	import MyTable from './../components/navBarItems/table.vue'
	import Underline from './../components/navBarItems/underline.vue'

	export default {
		components: {
			Bold,
			MyCode,
			Fullscreen,
			Github,
			Headline,
			MyImage,
			Italic,
			Link,
			List,
			ShowMenu,
			Preview,
			Question,
			Quote,
			Strikethrough,
			MyTable,
			Underline
		}
	}
</script>

<style lang="less">
	nav.navbar {
		box-sizing: border-box;
		position: relative;
		height: 45px;
		background-color: #009688;
		box-shadow: 4px 3px 3px #aaa;
		z-index: 20;
		ul {
			height: 45px;
			min-width: 1000px;
			padding: 0;
			margin: 0;
			list-style: none;
			li {
				height: 45px;
				float: left;
				&:first-child {
					border-right: 2px solid #00897B;
				}
				&:nth-last-child(2) {
					border-left: 2px solid #00897B;
				}
				button {
					height: 45px;
					width: 45px;
					border: none;
					background: none;
					outline: none;
					transition: all ease .3s;
					&.active{
						background: #00796B;
					}
					&:hover {
						background: #00897B;
					}
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
</style>