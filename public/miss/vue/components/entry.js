import Search from "./Search.component.vue" ;
import Sidemenu from  "./Sidemenu.component" ;
import Datepicker from "./DatePicker.component.vue" ;
import muSelect from "./mu-select.component.vue" ;
import muInput from "./mu-input.component.vue" ;
import muTabs from "./mu-tabs.component.vue" ;
import muTabsPane from "./Tabs/mu-tab-pane.component.vue" ;

import Vue from "vue" ;

let installList    =  [Search,Sidemenu,Datepicker,muSelect,muInput,muTabs,muTabsPane]

const install      =  (list)=>{
	if( install.installed ){
		return ;
	}
	list.forEach( (v)=>{
		Vue.component( v.name , v )
	} )

	install.installed       =  true ;
}

install( installList )

export default {Search,Sidemenu,Datepicker,muSelect,muInput,muTabs,muTabsPane}