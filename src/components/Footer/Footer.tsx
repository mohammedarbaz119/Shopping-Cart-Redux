import { FunctionComponent } from 'react'
import classes from "./footer.module.css"
import packageJson from '../../../package.json'

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.footer} data-cy="footer">
      <ul>
        <li className={classes.footerLinks}>
          <a
            href="https://twitter.com/mda835856"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="twitterLink"
          >
            twitter
          </a>{" "}
          &bull;{" "}
          <a
            href="https://github.com/mohammedarbaz119"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="githubLink"
          >
            github
          </a>
        </li>
        <li className={classes.footerCopyrights}>
          © {packageJson.author.name} {currentYear}. All rights reserved.
        </li>
        <li>
          <div className={classes.version}>v.{packageJson.version}</div>
        </li>
      </ul>
    </footer>
  )
}
