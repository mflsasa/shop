<template>
	<div id="app">
		<v-head></v-head>
		<router-view></router-view>
	</div>
</template>
<script>
import vHead from '@/components/common/Header.vue';

export default {
	name: 'App',
	components:{
		vHead
	},
}
</script>

<style lang="scss">
@import "assets/css/reset.css";
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";
#app{
	.adminheader{
		height:60px;
	}
}
</style>