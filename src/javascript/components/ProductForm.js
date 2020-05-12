


if(document.querySelector('.product-form')) {
    let productForm = new Vue({
        el:".product-form",
        data() {
            return{
                form:{
                    id: "",
                    quantity: 1
                }
            }
        },
        methods: {
            addToCart(id){
                this.form.id = id;
                console.log(id)
                axios.post('/cart/add.js', this.form )
                        .then( (response) => {
                            console.log('added to cart na');
                        })
                        .catch( (error) =>  {
                            console.log(error); 
                        });
            }
        }
    })
    window.productForm = productForm;
}




