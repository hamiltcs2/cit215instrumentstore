Vue.component('pop-up', {
    data: () => ({ name: 'World' }),
    // When you click the "Update" button, Vue will emit an event `update`
    // to the parent, with the current state of 'name'.
    template: `
    <div v-bind:class="{hide: !item.pop}" class="popUp">
            <button v-on:mouseover="closeEnter(index)"
                    v-on:mouseleave="closeLeave(index)"
                    v-on:click="close(index)"
                    v-bind:class="getCloseClass(index, item.closeHover)"
                    class="close"
            >X</button>
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
            <img :src=item.image>
            <button v-on:click="addToCart(index)">Add to Cart</button>
        </div>
  `
});
new Vue({
    el: "#instruments-app",
    data: {
    products: [
        {
            id: 0,
            name: "Drums",
            price: "2.99",
            type: "Percussion",
            brand: "Maton",
            image: "https://i5.walmartimages.com/asr/b6ff5c95-6b63-435b-8969-74ac3245964c_1.b10948c90c80e1ba9146ee8b4ba9b66d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            hover: false,
            pop: false,
            closeHover: false,
            cart: false
        },
        {
            id: 1,
            name: "Flute",
            price: "3.99",
            type: "Wind",
            brand: "Yamaha",
            image: "https://i5.walmartimages.com/asr/76db142e-164e-4d84-8b83-829770bd7599_1.e9a51b527600f0ef2c07278b4b8c0ec3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            hover: false,
            pop: false,
            closeHover: false,
            cart: false
        },
        {
            id: 2,
            name: "Guitar",
            price: "4.99",
            type: "String",
            brand: "Fender",
            image: "https://i5.walmartimages.com/asr/fe16c85a-1be3-4802-88c9-a15cece702fa.eca4561f28247f640eae75075fe255c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            hover: false,
            pop: false,
            closeHover: false,
            cart: false
        },
        {
            id: 3,
            name: "Piano",
            price: "5.99",
            type: "String",
            brand: "Fender",
            image: "https://i5.walmartimages.com/asr/b693fec1-d3ce-4394-bbec-50b1074184c1_1.663c0d0fea7bdad70c6afcc6d02fe5a9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            hover: false,
            pop: false,
            closeHover: false,
            cart: false
        },
        {
            id: 4,
            name: "Violin",
            price: "6.99",
            type: "String",
            brand: "Yamaha",
            image: "https://i5.walmartimages.com/asr/be4c7db4-37b4-4791-a77a-85ab80aa7174_1.68f93511df58de7984d3f7a3bcdfb699.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            hover: false,
            pop: false,
            closeHover: false,
            cart: false
        },
        {
            id: 5,
            name: "Trumpet",
            price: "7.99",
            type: "Brass",
            brand: "Maton",
            image: "https://i5.walmartimages.com/asr/68df593e-730e-4deb-940e-18a3c1377851.5e7b9138cbf08f0462cf009668a1b3e2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            hover: false,
            pop: false,
            closeHover: false,
            cart: false
        }
    ],
        form: {
            name:"",
            type:"",
            price:"",
            selected:"",
            image:""
        },
        cart: 0,
        adder: false,
        hover: false
    },
    methods:{
        mouseEnter: function (index) {
            this.products[index].hover = true
        },
        mouseLeave: function (index) {
            this.products[index].hover = false
        },
        getClass: function (index) {
            if (this.products[index].hover === true) {
                return {
                    'Fender': this.products[index].brand === "Fender",
                    'Maton': this.products[index].brand === "Maton",
                    'Yamaha': this.products[index].brand === "Yamaha"
                }
            } else if (this.products[index].cart === true) {
                return 'hide'
            }
            else {
                return 'Normal'
            }
        },
        getPopup: function (index) {
            if (!this.products[index].cart === true) {
                this.products[index].pop = true
            }
        },
        closeEnter: function (index) {
            this.products[index].closeHover = true
        },
        closeLeave: function (index) {
            this.products[index].closeHover = false
        },
        closerEnter: function () {
            this.hover = true
        },
        closerLeave: function () {
            this.hover = false
        },
        getCloseClass: function (index, hover) {
            if (hover === true) {
                return 'close2'
            }
            else {
                return 'close1'
            }
        },
        getCloserClass: function (hover) {
            if (hover === true) {
                return 'close2'
            }
            else {
                return 'close1'
            }
        },
        close: function (index) {
            this.products[index].pop = false
        },
        closer: function () {
            this.adder = false
        },
        addToCart: function (index) {
            this.products[index].pop = false
            this.products[index].cart = true
            this.cart += 1
            console.log(this.products[index].cart)
        },
        emptyCart: function () {
            for (let i = 0; i < this.products.length; i++) {
                this.products[i].cart = false;
            }
            this.cart = 0;
        },
        addInstrument: function () {
            this.adder = true;
        },
        addNewInstrument: function () {
            console.log(this.form.name);
            console.log(this.form.type);
            console.log(this.form.price);
            console.log(this.form.selected);
            this.products.push({
                id: this.products.length,
                name: this.form.name,
                type: this.form.type,
                price: this.form.price,
                brand: this.form.selected,
                image: this.form.image,
                hover: false,
                pop: false,
                closeHover: false,
                cart: false
            })
            this.adder = false;
            
        },
        validateImage: function (url) {
            // let placeholder = "";
            // let regex = (https?:\/\/.*\.(?:png|jpg));
            // if (url.match(regex)){
            //     return url;
            // } else {
            //     return 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
            // }
            return url;

            // var image = new Image();
            // image.onload = function () {
            //     if (this.width > 0) {
            //         console.log("hello");
            //         placeholder = url;
            //     }
            // }
            // image.onerror = function() {
            //     placeholder = 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
            //     console.log("the image does not exist");
            // }
            // console.log("the image exists");
            // return placeholder;




            // this.validator(url).then( result => {
            //     if(result === true) {
            //         placeholder = url;
            //         return url;
            //     } else {
            //         return 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
            //     }
            // })
            //     .catch(error => {
            //        console.log(error);
            //     });



            // const res = await this.validator(url);
            // if (res === true) {
            //     placeholder = url;
            // } else {
            //     return 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
            // }
            // console.log(res);
            //return placeholder;
        },
        validator: async function (url) {
            const res = await fetch(url);
            const buff = await res.blob();
            return buff.type.startsWith('image/');
        }
    },
})