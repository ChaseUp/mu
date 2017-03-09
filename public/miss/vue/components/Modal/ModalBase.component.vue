<template>
	<div class="mu-modal">
		<div class="mu-modal-back"></div>
		<div class="mu-modal-body">
		    <div class="mu-modal-body-container">
		    	<slot name="modal-body"></slot>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		porps     :  {
			"show"   :  Boolean
		}
		,data(){
			let className       =  "mu-modal"
			return {
				"isShow"         :  !!this.show
			};
		}
		,watch  :  {
			isShow(){
				console.log(arguments)
			}
		}
	}
</script>