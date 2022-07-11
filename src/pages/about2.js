import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import DogImg from "../components/dogimg"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const about = () => (
  <Layout>
    <Seo title="SEO TITLE" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      {/* <h1>
        Welcome to <b>Gatsby!</b>
      </h1> */}

      <h1>ABOUT!</h1>
      <p className={styles.intro}>
        This is the about page. This is a simple Gatsby site. Welcome to my
        site.
      </p>

      <img
        src="img/dog.jpg"
        height="auto"
        width="100%;"
        alt="a VERY cute dog."
      />
      <DogImg src="img/dog2.jpg" alt="big silly dog" />
      <DogImg src="img/dog3.jpg" alt="very cool dog" />
    </div>
  </Layout>
)

export default about
