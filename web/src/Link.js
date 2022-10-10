import React from 'react'

const Link = ({ href, className, children }) => {
    const wrapWithIsActive = () => {
        return window.location.pathname === href
            ? `${className} active`
            : className
    }
    const onClick = e => {
        if (e.metaKey || e.ctrlKey) return
        e.preventDefault();
        window.history.pushState({}, '', href)
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    return (
        <a
            {...{
                onClick,
                href,
                className: wrapWithIsActive()
            }}>
            {children}
        </a>
    )
}

export default Link