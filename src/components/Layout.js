import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'assets/stylesheets/application.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

const Layout = ({ children, pageName, view }) => {
  let className = ''

  if (pageName) {
    className = `${className} page-${pageName}`
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Coronaviruset COVID-19 i Sverige - Karta</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
}

export default Layout
