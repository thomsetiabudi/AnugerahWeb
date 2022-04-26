import { writable, derived } from "svelte/store";

import data from "./data.json"

export const pathToData = {}

function loadPath(pages, parent, siblings) {
    pages.forEach((p) => {
        let _map = {
            content: p.content,
        };
        if (p.children && !siblings) {
            let children = [];
            p.children.forEach((c) => {
                children.push(c.pathname)
                _map["children"] = children;
            }); 
            loadPath(p.children, parent + p.pathname, children)
        }
        if (siblings) {
            _map["siblings"] = siblings
        }
        pathToData[parent + p.pathname] = _map
    });
}
loadPath(data, "", null)


export const showNav = writable(false);

const isBrowser = typeof window !== 'undefined'

const href = writable(isBrowser ? window.location.href : 'https://example.com')

const URL = isBrowser ? window.URL : require('url').URL

if (isBrowser) {
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    const updateHref = () => href.set(window.location.href)

    history.pushState = function () {
        originalPushState.apply(this, arguments)
        updateHref()
    }

    history.replaceState = function () {
        originalReplaceState.apply(this, arguments)
        updateHref()
    }

    window.addEventListener('popstate', updateHref)
    window.addEventListener('hashchange', updateHref)
}

export const url = {
    subscribe: derived(href, ($href) => new URL($href)).subscribe,
    ssrSet: (urlHref) => href.set(urlHref),
}

export function clickInternalURL(e) {
    e.preventDefault()
    const href = e.currentTarget.href
    history.pushState(href, '', href)
}