import { Component, Property, Link } from "oscal"




const componentHasPropValue = (name: string, value: string) => {
    return (component: Component) => {
        return propsHaveValue(name, value)(component.props)
    }
}
const componentHasProp = (name: string) => {
    return (component: Component) => {
        return propExists(name)(component.props);
    }
}
const componentHasRelationalLink = (rel: string) => {
    return (component: Component) => {
        return linkHasRelations(rel)(component.links);
    }
}

const addProp = (prop: Property, props?: Property[],) => {
    return props ? [...props, prop] : [prop]
}


const propsHaveValue = (name: string, value: string) => {
    return (props?: Property[]) => {
        return props ? typeof (props.find(prop => prop.name === name && value === prop.value)) !== 'undefined' : false
    }
}
const propValue = (name: string) => {
    return (props?: Property[]) => {
        return props && (props.find(prop => prop.name === name))?.value
    }
}

const propExists = (name: string) => {
    return (props?: Property[]) => {
        return props ? typeof (props.find(prop => prop.name === name)) !== 'undefined' : false
    }
}
const propIndex = (name: string) => {
    return (props?: Property[]) => {
        if (typeof (props) === "undefined") {
            return false;
        }
        const index = props ? props.findIndex(prop => prop.name === name) : false
        if (index === -1) {
            return props.length
        } else {
            return index;
        }
    }
}



const linkHasRelations = (rel: string) => {
    return (links?: Link[]) => {
        return links ? typeof (links.find(link => link.rel === rel)) !== 'undefined' : false
    }
}
const linksWithRelationalUuids = (rel: string) => {
    return (links?: Link[]) => {
        return links ? (links.filter(link => link.rel === rel).map(x => x.href.slice(1))) : []
    }
}

const dependentComponents = (component: Component) => {
    return linksWithRelationalUuids("depends-on")(component.links);
}

const componentPropValue = (name: string) => {
    return (component: Component) => {
        return component.props ? (component.props.find(prop => prop.name === name)?.value) : undefined
    }
}




export { addProp, propIndex, componentHasProp, componentHasPropValue, propValue, dependentComponents, propExists, componentHasRelationalLink, componentPropValue, propsHaveValue }