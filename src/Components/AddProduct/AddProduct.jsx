import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddProduct=event=>{
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name,image, price, brandName, type, description, rating }

        console.log(newProduct);

        fetch('http://localhost:5200/product',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json() )
        .then(data=>{
           
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="mt-10 w-full lg:mt-12 bg-amber-50 rounded-2xl drop-shadow">
            <h1 className="mx-auto p-10 text-amber-600 font-semibold text-2xl lg:text-4xl">Add New Product</h1>
          
                <form onSubmit={handleAddProduct} className="w-full px-10">
                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="image url " name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />

                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="brand name" name="brandName" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" placeholder="type" name="type" className="input input-bordered" required />
                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
                        </div>
                    </div>

                 <div className="flex gap-6">
                 <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" placeholder="short description" name="description" className="input input-bordered" required />
                    </div>
                    
                 </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-amber-600 drop-shadow">Add Product</button>
                    </div>
                </form>
             
        </div>
    );
};

export default AddProduct;