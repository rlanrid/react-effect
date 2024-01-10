import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    const headerContent = {
        '/sample01': { title: 'React Parallax Effect01', description: 'Framer Motion : 기본 애니메이션' },
        '/sample02': { title: 'React Parallax Effect02', description: 'Framer Motion ' },
        '/sample03': { title: 'React Parallax Effect03', description: 'Framer Motion ' },
        '/sample04': { title: 'React Parallax Effect04', description: 'Framer Motion ' },
        '/sample05': { title: 'React Parallax Effect05', description: 'Framer Motion ' },
        '/sample06': { title: 'React Parallax Effect06', description: 'Framer Motion ' },
        '/sample07': { title: 'React Parallax Effect07', description: 'Framer Motion ' },
        '/sample08': { title: 'React Parallax Effect08', description: 'Framer Motion ' },
        '/sample09': { title: 'React Parallax Effect09', description: 'Framer Motion ' },
        '/sample10': { title: 'React Parallax Effect10', description: 'Framer Motion ' },
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const { title, description } = headerContent[location.pathname];

    return (
        <header id="react__header">
            <h1>{title}</h1>
            <p>{description}</p>
            <ul>
                <li className={isActive('/sample01') ? 'active' : ''}><Link to="sample01">1</Link></li>
                <li className={isActive('/sample02') ? 'active' : ''}><Link to="sample02">2</Link></li>
                <li className={isActive('/sample03') ? 'active' : ''}><Link to="sample03">3</Link></li>
                <li className={isActive('/sample04') ? 'active' : ''}><Link to="sample04">4</Link></li>
                <li className={isActive('/sample05') ? 'active' : ''}><Link to="sample05">5</Link></li>
                <li className={isActive('/sample06') ? 'active' : ''}><Link to="sample06">6</Link></li>
                <li className={isActive('/sample07') ? 'active' : ''}><Link to="sample07">7</Link></li>
                <li className={isActive('/sample08') ? 'active' : ''}><Link to="sample08">8</Link></li>
                <li className={isActive('/sample09') ? 'active' : ''}><Link to="sample09">9</Link></li>
                <li className={isActive('/sample10') ? 'active' : ''}><Link to="sample10">10</Link></li>
            </ul>
        </header>
    )
}

export default Header
