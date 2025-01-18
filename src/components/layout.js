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
                <Link to="/game" className={navLinkText}>
                Game Dev
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/web" className={navLinkText}>
                Web Dev
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/software" className={navLinkText}>
                Software Dev
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/art/2d" className={navLinkText}>
                2D Art
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/art/3d" className={navLinkText}>
                3D Art
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