import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] =useState([]);

  // Fetch cart data and filter by user email
  useEffect(() => {
    fetch('http://localhost:5200/cart')
      .then(response => response.json())
      .then(data => {
        // Filter cart items by user email
        const userCartItems = data.filter(item => item.userId === user.email);
        console.log(userCartItems)
        setCartData(userCartItems);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, [user.email]);

  const handleDeleteItem = (itemId) => {
    fetch(`http://localhost:5200/cart/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove the deleted item from the cartData state.
          setCartData(prevCartData => prevCartData.filter(item => item.productId !== itemId));
        } else {
          console.error('Failed to delete the item');
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };


    return (
        <div>
        <h2>My Cart</h2>
        <ul>
        {cartData.map(item => (
          <li key={item.productId}>
            {/* Display item details */}
            Product: {item.productDetails?.name} <button  className='btn bg-amber-500' onClick={() => handleDeleteItem(item._id)}> Delete</button>
           
          </li>
        ))}
      </ul>
      </div>
    );
  };
  export default MyCart; 