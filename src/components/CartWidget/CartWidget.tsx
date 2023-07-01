import { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import shoppingCart from '../../assets/shopping-cart.svg'
import classes from './cart-widget.module.css'

interface Props {
  productsCount: number
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  const navigate = useNavigate()

  const navigateToCart = () => {
    navigate('/cart')
  }

  useEffect(()=>{setTimeout(()=>console.log("p"),300)},[])
  return (
    <button className={classes.container} onClick={navigateToCart}>
      <span className={classes.productsCount}>{productsCount}</span>
      <img src={shoppingCart} className={classes.shoppingCart} alt="Go to Cart" />
    </button>
  )
}
