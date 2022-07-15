import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "./layout"

const Header = ({ siteTitle }) => <header></header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
