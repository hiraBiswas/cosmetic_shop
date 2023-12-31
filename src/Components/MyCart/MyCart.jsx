import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCart = () => {
    const { user, loading } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    const loadedData = useLoaderData();
    console.log(loadedData);

    useEffect(() => {
        fetch('https://cosmetic-and-beauty-server.vercel.app/cart')
            .then(response => response.json())
            .then(data => {
                const userCartItems = data.filter(item => item.userId === user.email);
                setCartData(userCartItems);
                console.log(userCartItems)
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, [user.email]);
    

    const handleDeleteItem = (itemId) => {
        fetch(`https://cosmetic-and-beauty-server.vercel.app/cart/${itemId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    const remainingData = cartData.filter(dataItem => dataItem._id !== itemId);
                    toast.success('Product deleted Successfully')
                    setCartData(remainingData);
                } else {
                  toast.error('Failed to Delete')
                }
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };

    return (
      <div>
        <div className="container mx-auto mt-10 lg:mt-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {cartData.length === 0 ? (
                    <p className="text-center text-amber-50 text-White ">No products in the cart.</p>
                ) : (cartData.map(item => (
                    <div className="card  bg-base-100 shadow-xl" key={item._id}>
                       
                            <img src={item.productDetails?.image} alt="Shoes" className="rounded-xl h-52" />
                     
                        <div className="card-body items-center text-center">
                            <h2 className="card-title h-10">{item.productDetails?.name}</h2>
                            <div className="card-actions">
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-amber-500">Delete</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Are You Sure to Delete?</h3>
                                        <p className="py-4">You cannot revert the action</p>
                                        <div className="flex justify-between items-center">
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDeleteItem(item._id)} className="btn bg-amber-500">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default MyCart;
