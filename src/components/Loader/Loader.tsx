import { FunctionComponent } from 'react'
import classes from './loader.module.css'

export const Loader:FunctionComponent = () => (
    <div className={classes.loader}>
      <div className={classes.spinner}></div>
    </div>
  )
