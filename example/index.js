import { config, start, componentFactory } from 'xr-meta-engine'
import myConfig  from './config'

import xr_template_login from './apps/xr-template-login/index.js'

const apps = {
	[xr_template_login.name]:xr_template_login,	
}


config(myConfig({apps}))


import * as xrComponents from 'xr-component'

Object.keys(xrComponents).forEach(key=>{
	componentFactory.registerComponent(key, xrComponents[key])
})
	

start()