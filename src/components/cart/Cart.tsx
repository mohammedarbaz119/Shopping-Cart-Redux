import { FunctionComponent, useEffect } from 'react'
import { Quantifier } from '../Quantifier'
import { TotalPrice } from '../TotalPrice'
import { Operation } from '../Quantifier/Quantifier.tsx'
import classes from './cart.module.css'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../store/cartSlice/cart.ts'


export const Cart: FunctionComponent = () => {
  const cart =useAppSelector((state)=>state.cart)
  const setCart = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleRemoveProduct = (productId: number): void => {
    setCart(removeItem({id:productId}))
  }

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
      if (cart[productId]) {
        if (operation === 'increase') {
        setCart(increaseQuantity({ProductId:productId}))
        } else {
        setCart(decreaseQuantity({ProductId:productId}))
        }
  }
}


  const getProducts = () => Object.values(cart || {})

  const totalPrice = getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

  return (
    <section className={classes.cart}>
      <h1>Cart</h1>

      <div className={classes.container}>
        {getProducts().map(product => (
          <div className={classes.product} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <Quantifier
              removeProductCallback={() => handleRemoveProduct(product.id)}
              productId={product.id}
              handleUpdateQuantity={handleUpdateQuantity} />
          </div>
        ))}
      </div>
      <TotalPrice amount={totalPrice} />
    </section>
  )
}

