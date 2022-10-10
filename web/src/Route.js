import { useState, useEffect } from 'react'

const Route = ({ path, render }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = (e) => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    return currentPath === path ? render : null
}

export default Route