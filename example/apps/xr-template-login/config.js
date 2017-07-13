import {fetch} from 'xr-utils'

var _options = {
	loginApi : (user, password) => {
		return fetch.post('/v1/user/login',{mobile:user, password })
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