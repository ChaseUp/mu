;(function(fn){
	if( typeof require === "undefined" )
		throw new Error("please use require.js together")
	return fn.call(true)
})(function(){
	require.config({
		// baseUrl         :  "//172.31.0.89"
		paths           :  {
			"react"           :  "//127.0.0.1/React/react.min"
			,"react-router"   :  "//127.0.0.1/React/ReactRouter.min"
			,"react-dom"      :  "//127.0.0.1/React/react-dom.min"
			,"react-dom-server"      :  "//127.0.0.1/React/react-dom-server.min"
			,"react-addons"   :  "//127.0.0.1/React/react-with-addons.min"
			,"jquery"         :  "//127.0.0.1/jquery/jquery-3.1.1.min"
			,"vue"            :  "//127.0.0.1/vue/vue.min"
		}
		,map            :  {
			"*"         :  {
				css     :  "//127.0.0.1/require/require-css/css.min"
			}
		}
	})
})