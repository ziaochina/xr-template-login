import React from 'react'
import { action as MetaAction, AppLoader } from 'xr-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }

    login = async () =>{
        const user = this.metaAction.gf('data.form.user')
        const password = this.metaAction.gf('data.form.password')

        const ret = await config.getCurrent().loginApi(user, password)
        if(ret.result && ret.value){
            this.metaAction.toast('success','ok')
        }
        else{
            this.metaAction.toast('error','error')
        }
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}