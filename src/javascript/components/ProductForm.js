

let productForm = new Vue({
    el:".product-form",
    data() {
        return{
            form:{
                // id: document.getElementById('variant_id').value ,
                id: "",
                quantity: 1
            }
        }
    },
    methods: {
        testing(a) {
            console.log('product add to cart is clicked');
            // console.log(a);
        },
        addToCart(id){
            this.form.id = id;
            // console.log(this.form);
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




