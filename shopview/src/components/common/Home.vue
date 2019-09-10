<template>
	<div class="homebox">
		<el-container style="height:100%; border: 1px solid #eee">
			<!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '3']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside> -->
			<v-sidebar></v-sidebar>
			<el-container class="containerbox">
				<el-main>
					<transition name="move" mode="out-in">
						<keep-alive :include="tagsList">
							<router-view></router-view>
						</keep-alive>
					</transition>
					<el-backtop target=".containerbox"></el-backtop>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
import vSidebar from '@/components/common/Sidebar.vue';
import bus from '@/components/common/bus';
export default{
	name:"Home",
	components:{
		vSidebar,
	},
	data:()=>({
		// homebox:"",
		tagsList:[],
		collapse:false
	}),
	created() {
		bus.$on('collapse-content', msg => {
			this.collapse = msg;
		});

		// 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
		bus.$on('tags', msg => {
			let arr = [];
			for (let i = 0, len = msg.length; i < len; i++) {
				msg[i].name && arr.push(msg[i].name);
			}
			this.tagsList = arr;
		});
	},
	mounted(){

	},
	metheds:{

	},
}
</script>
<style lang="scss" scoped>
.homebox{
	height:100%;
	.containerbox{
		width:calc(100% - 200px);
	}
}
</style>