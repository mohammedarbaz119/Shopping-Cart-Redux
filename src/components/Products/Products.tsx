import { FunctionComponent, useEffect, useState } from 'react'
import { CurrencyFormatter } from '../CurrencyFormatter'
import classes from './products.module.css'
import { Loader } from '../Loader'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import { addItem, cart } from '../../store/cartSlice/cart'

const API_URL = 'https://dummyjson.com/products'


export const Products: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<cart[]>([])
  const [error, setError] = useState(false)
  const cart =useAppSelector((state:RootState)=>state.cart)
  const setCart = useAppDispatch()


  useEffect(() => {
    fetchData(API_URL)
  }, [])


  async function fetchData(url: string) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products)
        setIsLoading(false)
      } else {
        setError(true)
        setIsLoading(false)
      }
    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  const addToCart = (product: cart):void => {
    product.quantity = 1
    setCart(addItem(product))
  }

  const isInCart = (productId: number):boolean => Object.keys(cart || {}).includes(productId.toString())

  if (error) {
    return <h3 className={classes.error}>An error occurred when fetching data. Please check the API and try again.</h3>
  }

  if (isLoading) {
    return <Loader />
  }


  return (
    <section className={classes.productPage}>
      <h1>Products</h1>

      <div className={classes.container}>
        {products.map(product => (
          <div className={classes.product} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: <CurrencyFormatter amount={product.price} /></p>
            <button disabled={isInCart(product.id)} onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
