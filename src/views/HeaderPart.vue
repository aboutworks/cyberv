<template>
	<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

	<header>
		<div style="flex: .2; padding-left:1rem;"></div>
		<div style="flex: .6;">CyberVisual</div>
		<div style="flex: .2; padding-right:1rem;">
			<contralRightForm></contralRightForm>
		</div>
	</header>

</template>

<script>
import contralRightForm from '@/components/Header/ContralRightForm.vue';

export default {
	data() {
		return {

		}
	},
	components: {
		contralRightForm
	}
}
</script>

<style>
header {
	width: 100vw;
	display: flex;
	text-transform: uppercase;
	justify-content: space-between;
	align-items: center;
	color: white;
	font-size: 1.5rem;
	font-weight: bolder;
	background-image: url('@/statics/svgs/headerbg.svg');
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}
</style>