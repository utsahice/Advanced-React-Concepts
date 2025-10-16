import { Link } from 'react-router-dom'

const mockProducts = [
  { id: 1, title: 'Phone', price: 699 },
  { id: 2, title: 'Headphones', price: 199 },
  { id: 3, title: 'Laptop', price: 1299 },
]

export default function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {mockProducts.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price} {' '}
            <Link to={`/products/${p.id}`}>View details</Link>
          </li>
        ))}
      </ul>
      <p>Details route is protected; you must be logged in to view.</p>
    </div>
  )
}


