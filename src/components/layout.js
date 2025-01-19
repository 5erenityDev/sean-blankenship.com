import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
    return (
        <div className={container}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
            <ul className={navLinks}>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                Home
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/developer/game" className={navLinkText}>
                Game Dev
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/developer/web" className={navLinkText}>
                Web Dev
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/developer/software" className={navLinkText}>
                Software Dev
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/artist/2d" className={navLinkText}>
                2D Art
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/artist/3d" className={navLinkText}>
                3D Art
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/education" className={navLinkText}>
                Education
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/experience" className={navLinkText}>
                Experience/Certifications
                </Link>
            </li>
            </ul>
        </nav>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
        </div>
    )
}

export default Layout