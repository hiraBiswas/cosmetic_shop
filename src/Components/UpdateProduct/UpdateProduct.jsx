import { useLoaderData } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData()
    console.log(product)
    const { brand_name, id } = useParams(); 
    const {_id,name, brandName,price, rating, image, type,description}= product;
    const handleUpdateProduct=event=>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updateProduct = { name,image, price, brandName, type, description, rating }

        console.log(updateProduct);

        fetch(`http://localhost:5200/product/${id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json() )
        .then(data=>{ 
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
      
    return (
        <div className="mt-10 w-full lg:mt-12 bg-amber-50 rounded-2xl drop-shadow">
            <h1 className="mx-auto p-10 text-amber-600 font-semibold text-2xl lg:text-4xl">Update Product</h1>
          
                <form onSubmit={handleUpdateProduct} className="w-full px-10">
                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="image url " defaultValue={image} name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered" required />

                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="brand name" defaultValue={brandName} name="brandName" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" defaultValue={type} placeholder="type" name="type" className="input input-bordered" required />
                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" defaultValue={rating} name="rating" className="input input-bordered" required />
                        </div>
                    </div>

                 <div className="flex gap-6">
                 <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" placeholder="short description" defaultValue={description} name="description" className="input input-bordered" required />
                    </div>
                    
                 </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-amber-600 drop-shadow">Update</button>
                    </div>
                </form>
             
        </div>
     
    );
};

export default UpdateProduct;