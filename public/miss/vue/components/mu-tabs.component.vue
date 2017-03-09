<script>
	export default {
		"name"     :  "mu-tabs"
		,data(){
			return {
				"pane"      :  []
			};
		}
		,methods    :  {
			addPane(node){
				this.pane.push(node)
			}
		}
		// ,functional :  true
		,render(h){
			const tabs     =  this._l( this.pane , ( pane , index )=>{
				return (
					<div class="mu-tab">{pane.label}</div>
				) ;
			} )
			return (
				<div class="mu-tabs">
					<div class="mu-tabs-titls">
					    {tabs}
					    <div class="mu-tab-bar"></div>
					</div>
					<div class="mu-tabs-body">{this.$slots.default}</div>
				</div>
			);
		}
	}
</script>