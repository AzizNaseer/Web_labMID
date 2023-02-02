//Geting ids of products
const smartHome = document.getElementById('sm');
const computer = document.getElementById('com');
const electronics = document.getElementById('elec');
const music = document.getElementById('music');
const boyFashion = document.getElementById('bf');
const girlFashion = document.getElementById('gf');
const menFashion = document.getElementById('mf');
const sports = document.getElementById('so');

//Geting ids of img, heading and amount
const title = document.getElementById('heading');

//product 1
const img1 = document.getElementById('img1');
const heading21 = document.getElementById('heading21');
const amount1 = document.getElementById('amount1');

//product 2
const img2 = document.getElementById('img2');
const heading22 = document.getElementById('heading22');
const amount2 = document.getElementById('amount2');

//product 3
const img3 = document.getElementById('img3');
const heading23 = document.getElementById('heading23');
const amount3 = document.getElementById('amount3');


// SmartHome Functions
function smartHomef(){
    title.innerHTML = 'Smart Home';

    img1.setAttribute("src","/Smart Home/Cleaning robot.jpg");
    heading21.innerHTML = "Home Cleaning Robot";
    amount1.innerHTML = "(99.99$)";

    img2.setAttribute("src","/Smart Home/smart thermostat.jpg");
    heading22.innerHTML = "Smart Thermostat";
    amount2.innerHTML = "(18.99$)";

    img3.setAttribute("src","/Smart Home/air purifier.jpg");
    heading23.innerHTML = "Smart Air Purifier";
    amount3.innerHTML = "(11.99$)";
}

//Computer Funtion
function computerf(){
    title.innerHTML = 'Computers';

    img1.setAttribute("src","/Computers/BENGOO Gaming Headset.jpg");
    heading21.innerHTML = "STECH Gaming Headset";
    amount1.innerHTML = '(13.99$)';

    img2.setAttribute("src","/Computers/sysTech Usb c to adapter.jpg");
    heading22.innerHTML = "USB C to Adapter";
    amount2.innerHTML = "(1.99$)";

    img3.setAttribute("src","/Computers/Macbook air laptop.jpg");
    heading23.innerHTML = "Apple Macbook Air";
    amount3.innerHTML = "(80.99$)";
    
}

//Electronics  Function
function electronicsf(){
    title.innerHTML = "Electronics";

    img1.setAttribute("src","/Electronics/DJI Mini 3 Pro.jpg");
    heading21.innerHTML = "Yuneec Typhoon Plus";
    amount1.innerHTML = '(87.99$)';

    img2.setAttribute("src","/Electronics/tripod.jpg");
    heading22.innerHTML = "Ring Light with Tripod";
    amount2.innerHTML = "(7.99$)";

    img3.setAttribute("src","/Electronics/Wyze Cam v3 with Color Night Vision.jpg");
    heading23.innerHTML = "Cam with Night Vision";
    amount3.innerHTML = "(16.99$)";

}

//Music Function
function musicf(){
    title.innerHTML = "Music";

    img1.setAttribute("src","/Music/m1.jpg");
    heading21.innerHTML = "Manhit Music Stand";
    amount1.innerHTML = '(9.99$)';

    img2.setAttribute("src","/Music/m2.jpg");
    heading22.innerHTML = "Podcast Recording Kit";
    amount2.innerHTML = "(39.99$)";

    img3.setAttribute("src","/Music/m3.jpg");
    heading23.innerHTML = "Micro Isolation Shield ";
    amount3.innerHTML = "(6.99$)";
}

//MenFashion Function
function menFashionf(){
    title.innerHTML = "Men's Fashion";

    img1.setAttribute("src","/Men's Fashion/Hanes Men's Sweatshirt.jpg");
    heading21.innerHTML = "Hanes Sweatshirt";
    amount1.innerHTML = '(9.99$)';

    img2.setAttribute("src","/Men's Fashion/Legendary Whitetails.jpg");
    heading22.innerHTML = "Legendary Whitetails";
    amount2.innerHTML = "(6.99$)";

    img3.setAttribute("src","/Men's Fashion/m2.jpg");
    heading23.innerHTML = "Cotton-Blend Sweatshirt";
    amount3.innerHTML = "(10.99$)";

}

//GirlsFashion Function
function GirlsFashionf(){
    title.innerHTML = "Girl's Fashion";

    img1.setAttribute("src","/Girls Fashion/Carter's Toddler Girls' Graphic.jpg");
    heading21.innerHTML = "Toddler Girls' Graphic";
    amount1.innerHTML = '(7.99$)';

    img2.setAttribute("src","/Girls Fashion/Columbia Girls' Katelyn Crest Jacket.jpg");
    heading22.innerHTML = "Katelyn Crest Jacket";
    amount2.innerHTML = "(9.99$)";

    img3.setAttribute("src","/Girls Fashion/The Children's Place Girls' Denim Jacket.jpg");
    heading23.innerHTML = "Toddler Denim Jacket";
    amount3.innerHTML = "(6.99$)";

}

//BoysFashion Function
function BoysFashionf(){
    title.innerHTML = "Boys Fashion";

    img1.setAttribute("src","/Boy's Fashion/Gildan Youth Hooded Sweatshirt.jpg");
    heading21.innerHTML = "Hanes Men's Sweatshirt";
    amount1.innerHTML = '(9.99$)';

    img2.setAttribute("src","/Boy's Fashion/Simple Joys by Carter's Boys' Thermal Long-Sleeve Shirts.jpg");
    heading22.innerHTML = "Long-Sleeve Shirts";
    amount2.innerHTML = "(2.99$)";

    img3.setAttribute("src","/Boy's Fashion/The Children's Place Boys' Long Sleeve Oxford Shirt.jpg");
    heading23.innerHTML = "Long Sleeve Oxford Shirt";
    amount3.innerHTML = "(6.99$)";
}

//Sports and outdoor Function
function SportsAndOutdoorf(){
    title.innerHTML = "Sports & Outdoor";

    img1.setAttribute("src","/Sports and outdoor/adidas Diablo Small Duffel Bag.jpg");
    heading21.innerHTML = "Small Duffel Bag";
    amount1.innerHTML = '(5.99$)';

    img2.setAttribute("src","/Sports and outdoor/Adjustable Height Handlebars.jpg");
    heading22.innerHTML = "Hens Handlebars";
    amount2.innerHTML = "(9.99$)";

    img3.setAttribute("src","/Sports and outdoor/Advanced Fitness & Health Tracker.jpg");
    heading23.innerHTML = " Fitness & Health Tracker";
    amount3.innerHTML = "(6.99$)";

}

//Event Listeners
smartHome.addEventListener('click',smartHomef);
computer.addEventListener('click',computerf);
electronics.addEventListener('click',electronicsf);
music.addEventListener('click',musicf);
menFashion.addEventListener('click',menFashionf);
girlFashion.addEventListener('click',GirlsFashionf);
boyFashion.addEventListener('click',BoysFashionf);
sports.addEventListener('click',SportsAndOutdoorf);


//Form
const product_name = document.getElementById('pname');
const product_quantity = document.getElementById('quantity');

const confirmOrderBtn = document.getElementById('confirm');

const subTotalAmount = document.getElementById('sub_total');
const totalAmount = document.getElementById('total');

function setPrice(){
    let x  = product_quantity.value;
    subTotalAmount.innerHTML = x;

}

confirmOrderBtn.addEventListener('click',setPrice);



