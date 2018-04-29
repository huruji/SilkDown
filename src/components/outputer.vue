<template>
	<div class="outputer" v-html='ripeTxt' :class="[fullscreen ? 'fullscreen' : '',preview ? 'preview' : '', theme]"></div>
</template>

<script>
  export default {
    data () {
      return {
        scrollTrigger: false
      }
    },
    computed: {
      ripeTxt () {
        return this.$store.getters.articleMd
      },
      fullscreen() {
        return this.$store.state.fullscreen;
      },
      preview() {
        return this.$store.state.preview;
      },
      theme() {
        return this.$store.state.theme;
      }
    }
  }
</script>

<style lang="less">
	.outputer {
    transition: all ease .5s;
  	box-sizing: border-box;
  	height: 100%;
  	width: 50%;
    padding: 15px;
    resize: none;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 18px;
    white-space: normal;
    overflow-y: scroll;
    word-wrap: break-word;
    img{
      max-width: 100%;
      margin: 0 auto;
      display: block;
    }
    .emoji{
      height: 1em;
      display: inline;
    }
	}

  div.outputer.fullscreen{
      display:none
  }

  div.outputer.preview{
      width:100%;
      max-width:1200px;
  }


   // theme-day
  .outputer.theme-day{
    background-color: #f5f5f5;
    color: #616161;
    box-shadow: 4px 5px 3px #aaa;

    
  }

  // theme-night
  .outputer.theme-night{
    background-color: #4d4d4d;
    color: #b3b3b3;
    box-shadow: 4px 5px 3px #1f1f1f;

    pre{
      background-color: #262626;
      border-color: #1a1a1a;
      color: #839496;
    }

    code{
      background-color: #262626;
      color: #657b83;
    }

    blockquote{
      border-left-color: #262626;
      background: #595959;
    }
  }
</style>