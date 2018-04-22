<template>
	<li class="navbar-item navbar-emoji" style="position:relative" >
		<button title="emoji" @click="showEmojiHandler" :class="{'active': showEmoji}">
			<i class="fa fa-meh-o"></i>
		</button>
		<div class="navbar-emoji-container" :style="{display: showEmoji? 'block': 'none'}">
			<div :style="{left: -(emojiPage - 1) * 440 + 'px'}">
				<ul class="navbar-emoji-container-ul" v-for="(emojis, ind) in emojiArr" :key="ind">
					<li v-for="(e, index) in emojis" :key="ind * 50 + index" class="navbar-emoji-container-item" @click="insert(ind * 50 + index)">
						<span v-html="e" ></span>
					</li>
				</ul>
			</div>
			<div class="emoji-page-controller">
				<span class="emoji-page-prev" @click="emojiPagePrev">
					<i class="fa fa-angle-left"></i>
				</span >
				{{emojiPage +"/" + emojiPageNum}}
				<span class="emoji-page-next" @click="emojiPageNext">
					<i class="fa fa-angle-right"></i>
				</span>
			</div>
		</div>
	</li>
</template>

<script>
	import insertContent from './../../utils/insertContent.js'
	import emojiConf from './../../emoji.js'
	import md from './../../markdownConf.js'

	export default{
		data:function(){
			return{
				emojiPage: 1,
				showEmoji: false
			}
		},
		computed: {
			emojiPageNum: function() {
				return Math.ceil(this.emoji.length / 50);
			},
			emojiSymbol: function() {
				let symbol = []

				symbol = symbol.concat(emojiConf.people,emojiConf.nature, emojiConf.object, emojiConf.place, emojiConf.symbol)

				return symbol;
			},
			emoji: function() {
				let emoji = []

				for(let i = 0; i < this.emojiSymbol.length; i++){
					emoji.push(md.render(this.emojiSymbol[i]))
				}

				return emoji

			},
			emojiArr: function() {
				let emojiArr = []

				for(let i = 0; i < this.emoji.length; i+= 50){
					emojiArr.push(this.emoji.slice(i, i+ 50))
				}

				return emojiArr;
			}
		},
		methods: {
			emojiPagePrev() {
				if(this.emojiPage === 1) return;

				this.emojiPage -= 1;
			},
			emojiPageNext() {
				if(this.emojiPage === Math.ceil(this.emoji.length / 50)) return;

				this.emojiPage += 1;
			},
			insert(index) {
				let insertDes = {
					content: this.emojiSymbol[index],
					startSymbolLen: this.emojiSymbol[index].length,
					endSymbolLen: 0,
					updateStart: this.emojiSymbol[index],
					updateEnd:	''
				}

				insertContent(insertDes);

				this.showEmoji = false;

			},
			showEmojiHandler: function() {
				this.showEmoji = !this.showEmoji;
			}
		}
	}
</script>

<style  lang="less">
	.navbar-emoji-container{
		position:absolute;
		z-index: 1000;
		width: 440px;
		height:235px;
		padding: 10px 0;
		background:#fefefe;
		overflow: hidden;
		left: -200px;
    	top: 50px;
    	border-radius: 5px;
    	border: 1px solid #ccc;
		div{
			display: flex;
			min-width:100%;
			position: relative;
			transition: all ease .5s;
		}
		.emoji-page-controller{
			margin-top: 10px;
			display:flex;
			justify-content: center;
			line-height:25px;
			font-size: 12px;
			color: #777;
			span.emoji-page-next,span.emoji-page-prev{
				width: 30px;
    			height: 20px;
    			text-align: center;
    			display: inline-block;
    			line-height: 20px;
    			border: 1px solid #ccc;
    			border-radius: 4px;
    			margin: 0 5px;
    			cursor: pointer;
    			&:hover .fa{
    				color: #000;
    			}
			}
			.fa{
				color: #aaa;
    			font-size: 20px;
			}
		}
		ul.navbar-emoji-container-ul{
			display:flex;
			flex-wrap: wrap;
			min-width: 400px;
			padding: 0 20px;
			width:400px;
			list-style: none;
			align-content: flex-start;
			li.navbar-emoji-container-item{
				width:32px;
				height:32px;
				padding:4px;
				p{
					margin:0;
					height:100%;
				}
				span{
					width: 32px;
					height: 32px;
					img{
						width: 100%;
					}
				}
			}
		}
	}
</style>