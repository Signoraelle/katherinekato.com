import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import Background from './background'
import './layout.css'

import "typeface-assistant"

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A front-end web developer based in Seattle. I enjoy crafting digital experiences through code & design.' },
            { name: 'keywords', content: 'katherine kato, web design, front-end web development' },
          ]}
        />
        <Background />
        <Header siteTitle={data.site.siteMetadata.title} />
        <section className="page-content">
          {children}
        </section>

        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout