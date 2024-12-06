<template>
	  <div class="loginBox">
		<div class="loginTop"></div>
		<div class="loginHead"></div>
		<div class="loginBottom"></div>
	  </div>
  </template>
  
  <script>
  export default {
	data() {
	  return {};
	},
	components: {
	},
  };
  </script>
  
  <style>
  .loginBox{
	height:40vh;
	width: 40vw;
  }
  .loginBottom,.loginTop,.loginHead{
background-size: contain;
background-repeat: no-repeat;
background-position: center;
  }
  .loginHead{
	background-image: url('@/statics/pngs/head.png');
	height: 50vh;
  }
  .loginTop{
background-image: url('@/statics/svgs/logtop.svg');	
height:60px;
  }
  .loginBottom{
background-image: url('@/statics/svgs/logbottom.svg');	
height:60px;

  }
  </style>