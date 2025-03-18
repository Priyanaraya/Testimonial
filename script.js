const testimonials=[
    {
        "id": 1,
        "name":"dhachu",
        "testimonial":"the given product is nice",
        "image":"https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg",
    },
    {
        "id": 2,
        "name":"prdeep",
        "testimonial":"the given product is nice",
        "image":"https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg",
    },
    {
        "id": 3,
        "name":"dhachu",
        "testimonial":"the given product is beauty",
        "image":"flower.jpg",
    },
    {
        "id": 4,
        "name":"priya",
        "testimonial":"the given product is wow",
        "image":"https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg",
    },
    {
        "id": 5,
        "name":"dharshini",
        "testimonial":"the given product is super",
        "image":"flower.jpg",
    },

]
const image1=document.querySelector("img");
const text=document.querySelector(".text");
const username=document.querySelector(".username");

let indexval=0;

function UpdateTestimonial(){
    const{id,name,testimonial,image}=testimonials[indexval];
    image1.src=image;
    text.innerHTML=testimonial;
    username.innerHTML=name;
    indexval++;
    if(indexval===testimonials.length){
        indexval=0;
    }
    setTimeout(UpdateTestimonial,2000)
        
    }

UpdateTestimonial();


