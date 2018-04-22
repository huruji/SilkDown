<template>
	<div class="inputer-container" :class="[fullscreen ? 'fullscreen' : '',preview ? 'fullscreen' : '', theme]">
		<div class="inputer-content">
			<textarea id="inputer" :value='rawTxt' @input='inputting' @scroll='syncStroll' @drop.stop.prevent='dragging' autofocus>
			</textarea>
			<line-number/>
		</div>
	</div>
</template>

<script>
	import lineNumber from './lineNumber.vue';

	export default {
		components:{
			lineNumber
		},
		computed: {
			rawTxt () {
				return this.$store.getters.articleRaw
			},
			fullscreen() {
				return this.$store.state.fullscreen;
			},
			preview() {
				return this.$store.state.preview;
			},
			theme() {
      			return this.$store.state.theme
    		}
		},
		methods: {
			inputting (e) {
				this.$store.dispatch('textInput', e.target.value)
				this.$store.dispatch('saveToCache')
			},
			syncStroll (e) {
				let outputer = document.querySelector('.outputer')
				let lineContainer = document.querySelector('.line-container')
				outputer.scrollTop = e.target.scrollTop
				lineContainer.style.top = -e.target.scrollTop + 'px';
			},
			dragging (e) {
				let self = this
	      		let dt = e.dataTransfer;
	      		let files = dt.files;
	      		let fileReader = new FileReader();
	      ileReader.readAsText(files[0], 'UTF-8');
	      fileReader.onloadend = function (e) {
	        let value = e.target.result
	        self.$store.dispatch('textInput', value)
	        self.$store.dispatch('saveToCache')
	      }
			}
		}
	}
</script>

<style scoped lang="less">
    div.inputer-container.fullscreen{
    	width:100%;
    }
	div.inputer-container.preview{
    	display:none;
    }
	div.inputer-container {
		transition: all ease 1s;
		position:relative;
		width: 50%;
		height: 100%;
		margin-right: 10px;
		overflow:hidden;
		div.inputer-content{
			margin-left:45px;
			height:100%;
			textarea {
				position:relative;
				z-index:100;
				box-sizing: border-box;
				height: 100%;
				width: 100%;
	    		vertical-align: top;
	    		padding: 15px 15px 15px 10px;
	    		resize: none;
	    		border: none;
	    		outline: none;
	    		font-family: inherit;
	    		font-size: 18px;
	    		box-shadow: 4px 5px 3px #aaa;
	    		transition: all ease .3s;
	    		line-height:26px;
			}
		&:after{
			position: absolute;
    		display: block;
    		content: "";
    		width: 45px;
    		height: 100%;
    		top: 0;
    		left: 0;
		}
		}
	}

	// theme-day
	div.inputer-container.theme-day {
		div.inputer-content textarea{
			background-color: #f5f5f5;
			color: #616161;
		}
		div.line-container{
			background:#cecece;

			div.inputer-content:after{
				background:#cecece;
			}
		}
	}

	// theme-night
	div.inputer-container.theme-night {
		div.inputer-content textarea{
			background-color: #3d3d3d;
			color: #b3b3b3;
		}
		div.line-container{
			background: #232323;

			div.inputer-content:after{
				background: #232323;
			}
		}
	}
</style>