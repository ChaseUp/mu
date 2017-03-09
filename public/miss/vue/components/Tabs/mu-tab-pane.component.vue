<template>
	<div class="mu-tabs-container">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name    :  "mu-tab-pane"
		,props  :  {
			label   :  String
		}
		,data(){
			return {}
		}
		,mounted(){
			this.$parent.addPane(this)
		}
	}
</script>