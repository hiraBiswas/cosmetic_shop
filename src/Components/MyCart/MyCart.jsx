import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    const loadedData = useLoaderData();
    console.log(loadedData);

    useEffect(() => {
        fetch('http://localhost:5200/cart')
            .then(response => response.json())
            .then(data => {
                const userCartItems = data.filter(item => item.userId === user.email);
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
                    const remainingData = loadedData.filter(dataItem => dataItem._id !== itemId);
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
                {cartData.map(item => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={item._id}>
                        <figure className="px-10 pt-10">
                            <img src={item.productDetails?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.productDetails?.name}</h2>
                            <div className="card-actions">
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Delete</button>
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
                ))}
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default MyCart;
