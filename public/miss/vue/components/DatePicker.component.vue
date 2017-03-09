<template>
    <div class="mu-datepicker-group">
        <input :placeholder="placeholder" class="mu-input" @blur="handleFocus" @focus="handleFocus" :type="type" :name="name" :value="value">
    	<modal-base v-if="position == 'fixed'" :show="switchPicker">
			<Picker slot="modal-body"></Picker>
		</modal-base>
    </div>
</template>
<script>
    import Modalbase from "./Modal/ModalBase.component.vue" ;
    import Picker from "./DatePicker/Picker.vue" ;
	export default {
		name  : "mu-datepicker" ,
		props : { 
			"name"       :  String
			,"position"  :  String
		},
		data(){
			return {
				"type"       :  this.type !== void 0?this.type:"text"
				,"value"     :  this.value || ""
				,"position"  :  this.position || "normal"
				,"switchPicker"  :  false
			}
		}
		,"components" :  {
			"modal-base"    :  Modalbase
			,"Picker"       :  Picker
		}
		,"watch"   :  {
			switchPicker(){
				// console.log(arguments)
			}
		}
		,"methods"    :  {
			handleClick(){
			}
			,handleFocus(e){
				this.switchPicker         =  e.type != "blur"
			}
		}  
	}
</script>