import {fetch} from 'xr-utils'

var _options = {
	loginApi : (user, password) => {
		return fetch.test('','',{result:true, value: true})
	},
	rediectInfo: {
		appName: 'portal',
		appParams: {}
	}
}

function config(options) {
	if(options){
		_options = {..._options, ...options}
	}
}

config.getCurrent = () => _options

export default config