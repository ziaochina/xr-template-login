export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'xr-template-login',
		children: [{
			name: 'header',
			className: 'header',
			component: 'Layout',
			children: 'Monkey King'
		}, {
			name: 'content',
			className: 'content',
			component: 'Layout',
			children: [{
				name: 'contentLeft',
				className: 'content-left',
				component: 'Layout',
			}, {
				name: 'form',
				component: 'Form',
				className:'content-form',
				children: [{
					name: 'title',
					component: 'Form.Item',
					className: 'content-form-title',
					children: 'Login'
				}, {
					name: 'userItem',
					component: 'Form.Item',
					children:[{
						name: 'user',
						component:'Input',
						placeholder:'user name',
						onChange:"{{(e)=>$setField('data.form.user', e.target.value)}}",
						value: '{{data.form.user}}',
						prefix:{
							name:'userIcon',
							component:'Icon',
							type:'user',
						}
					}]

				},{
					name: 'passwordItem',
					component: 'Form.Item',
					children:[{
						name: 'password',
						component:'Input',
						placeholder:'password',
						type: 'password',
						onChange:"{{(e)=>$setField('data.form.password', e.target.value)}}",
						value: '{{data.form.password}}',
						prefix:{
							name:'passwordIcon',
							component:'Icon',
							type:'lock',
						}
					}]

				},{
					name:'loginBtnItem',
					component:'Form.Item',
					children:[{
						name: 'loginBtn',
						component: 'Button',
						children: 'Login',
						onClick:'{{$login}}'
					}]
				}]
			}, {
				name: 'contentRight',
				className: 'content-right',
				component: 'Layout',
			}, ]
		}, {
			name: 'footer',
			className: 'footer',
			component: 'Layout',
			children: 'copyright © 2015-2017 monkey king'
		}]
	}
}