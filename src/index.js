import LayTwoColumns from './components/two-columns'
import LayScrollbar from './components/scrollbar'

const components = {
    LayTwoColumns,
    LayScrollbar
}

const install = function(Vue, opts = {}) {
    if (install.installed) return

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    ...components
}

module.exports.default = module.exports = API
