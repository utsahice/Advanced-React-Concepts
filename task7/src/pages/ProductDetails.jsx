import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>This page is lazy-loaded and route-protected.</p>
    </div>
  )
}


