
//below function declared for store data to the local storage.
const addToLocalStorage = (id) =>{
    let cart = {};

    //find data from local storage.
    const storedData = localStorage.getItem('storage-cart');
    if(storedData){
        cart = JSON.parse(storedData);
    }

    //set key value or product's quantitys. Here id = key and 1,2,3.... or quantiy = values.    
    const quantity = cart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }else{
        cart[id] = 1;
    }

    localStorage.setItem('storage-cart', JSON.stringify(cart));
};

//delete single data from local storage.
const removeDataFromLocalStorage=(id)=>{
    const storedData = localStorage.getItem('storage-cart');

    if(storedData){
        const cart = JSON.parse(storedData);
        if(id in cart){
            delete cart[id];
            localStorage.setItem('storage-cart', JSON.stringify(cart));
        }
    }
};

//delete cart from local storage.
const removeCartFromLocalStorage = () =>{
    localStorage.removeItem('storage-cart');
}

//export these function.
export {
    addToLocalStorage,
    removeDataFromLocalStorage,
    removeCartFromLocalStorage
};