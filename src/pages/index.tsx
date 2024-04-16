import * as React from "react"
import { css } from "@linaria/core"
import type { HeadFC, PageProps } from "gatsby"

const mainStyles = css`
  color: red;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={mainStyles}>
      Hello team!
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
