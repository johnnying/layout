import LayScrollbar from './components/scrollbar'
import LayTwoColumns from './components/two-columns'
import LayThreeColumns from './components/three-columns'
import LayGrid from './components/grid'

const { LayRow, LayCol } = LayGrid

const components = {
    LayTwoColumns,
    LayScrollbar,
    LayThreeColumns,
    LayRow,
    LayCol
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
