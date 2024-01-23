<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width ,initial-scale=1.0">
    <title>My food project</title>
    <link rel="stylesheet" href="vendors/css/grid.css">
    <link rel="stylesheet" href="vendors\css\normalise.css">
    <link rel="stylesheet" href="resources\css\style.css">
    <link rel="stylesheet" href="resources/css/queries.css">
    
</head>
<body>
    <header>
        
            <div class="row">
            <img class ="logo" src="resources/img/logo-white.png" alt="logo-img">
            <ul class="main-nav">
                <li><a href="#">Food Delivery</a></li>
                <li><a  href ="#section-testimonials">How it works</a></li>
                <li><a href="#">Our Cities</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </div>
        
        <div class="hero-text-box">
            <h1>Goodbye junk food <br>Hello super healthy food</h1>
            <a href="#" class="btn btn-full">I'm Hungry &#128512;</a>
            <a href="#" class="btn btn-ghost">Show me more</a>
        </div>
    </header>
    <section class="section-features">
        <div class="row">
            <h2>Get food fast &mdash; not fast food</h2>
            <p class=" long-copy">Hello,we're Omnifood,your new premium food delivery service,we know you're always busy
                .No time for cooking.So let us take care of that, we're really good at it,we
                promise!</p>

            </div>
        <div class="row">
            <div class="col span_1_of_4 box">
                <ion-icon class="big-icon" name="infinite-outline"></ion-icon>
                <h3>Up to 365 days/year</h3>
                <p>Never cook again! we really mean that. Our subscription plans include up to <span style="color:darkorange">365</span> days/year coverage.
                    You can also choose to order more flexibly if that's your style.</p>
            </div>
            <div class="col span_1_of_4 box">
                <ion-icon class="big-icon" name="alarm-outline"></ion-icon>
                <h3>Ready in 20 minutes</h3>
                <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home.We work with the best 
                    chefs in each town to ensure that you're 100 % happy.</p>
            </div>
            <div class="col span_1_of_4 box">
                <ion-icon class="big-icon" name="fast-food-outline"></ion-icon>
                <h3>100% organic </h3>
                <p>All our vegetables are fresh,organic and local.Animals are raised without added hormones or antibiotics.
                    Good for your health,the environment, and it also tastes better.</p>
            </div>
            <div class="col span_1_of_4 box">
                <ion-icon class="big-icon" name="cart-outline"></ion-icon>
                <h3>Order anything</h3>
                <p>We don't limit your creativity,which means you can order whtaever you feel like.You can also choose from
                    our  menu containing over 100 delicious meals.It's up to you!</p>
            </div>
        </div>
    </section>
    <div class="section-meals">
        <ul class="meal-showcase clearfix">
            <li>
                <figure class="meal-photo"><img src="resources/img/1.jpg" alt="food-image"></figure>
            </li>
            <li>
                <figure class="meal-photo"><img src="resources/img/2.jpg" alt="food-image"></figure>
            </li>
            <li>
                <figure class="meal-photo"><img src="resources/img/3.jpg" alt="food-image"></figure>
            </li>
            
        </ul>
        <ul class="meal-showcase clearfix">
            <li>
                <figure class="meal-photo"><img src="resources/img/4.jpg" alt="food-image"></figure>
            </li>
            <li>
                <figure class="meal-photo"><img src="resources/img/5.jpg" alt="food-image"></figure>
            </li>
            <li>
                <figure class="meal-photo"><img src="resources/img/6.jpg" alt="food-image"></figure>
            </li>
        </ul>



    </div>
    <section class="section-steps" >
        <div class="row">
            <h2 style="margin-bottom:2px;padding:5px">How it works &mdash; Simple as 1,2,3</h2>
        </div>
        <div class="row clearfix">
            <div class="col span_1_of_2 steps-box">
                <img src="resources/img/app-iPhone.png" alt="phone-image" class="app-iPhone">
            </div>
            <div class="col span_1_of_2 steps-box">
                <div class="works-step">
                    <div>1</div>
                    <p>Choose plan that fits best for your need and sign up today</p>
                </div>
                <div class="works-step">
                    <div>2</div>
                    <p>Pay for the plan and download the app</p>
                </div>
                <div class="works-step">
                    <div>3</div>
                    <p>You are done start ordering!!</p>
                </div>
                <a href="#" class="btn-app" style="cursor:pointer;font-size:50%"><img src="resources/img/download-app-android.png" alt="app-store"></a>
                <a href="#" class="btn-app" style="cursor:pointer"><img src="resources/img/download-app.svg" alt="app-store"></a>
            </div>

        </div>


    </section>
    <section class="section-cities" >
        <div class="row">
            <h2>We're currently in these cities</h2>
        </div>
        <div class="row" >
            <div class="col span_1_of_4 box">
                <img src="resources/img/lisbon-3.jpg" alt="lisbon">
                <h3>Lisbon</h3>
                <div class="city-fea">
                    <ion-icon  class="icon-small" name="person-circle-outline"></ion-icon>1600+ Happy Eaters
                    
                </div>
                <div class="city-fea">
                    <ion-icon class="icon-small"  name="star"></ion-icon>50+ Chefs
                    
                </div>
                <div class="city-fea">
                    
                    <ion-icon class="icon-small"  name="logo-twitter"></ion-icon>
                    <a href="#">@omnifood_ls</a>
                </div>

            </div>
            <div class="col span_1_of_4 box">
                <img src="resources/img/san-francisco.jpg" alt="lisbon">
                <h3>San Francisco</h3>
                <div class="city-fea">
                    <ion-icon class="icon-small"  name="person-circle-outline"></ion-icon>1700+ Happy Eaters
                    
                </div>
                <div class="city-fea">
                    <ion-icon class="icon-small" name="star"></ion-icon>60+ Chefs
                    
                </div>
                <div class="city-fea">
                    
                    <ion-icon class="icon-small"  name="logo-twitter"></ion-icon>
                    <a href="#">@omnifood_sf</a>
                </div>

            </div>
            <div class="col span_1_of_4 box">
                <img src="resources/img/london.jpg" alt="lisbon" >
                <h3>London</h3>
                <div class="city-fea">
                    <ion-icon class="icon-small"  name="person-circle-outline"></ion-icon>2000+ Happy Eaters
                    
                </div>
                <div class="city-fea">
                    <ion-icon class="icon-small"  name="star"></ion-icon>80+ Chefs
                    
                </div>
                <div class="city-fea">
                    
                    <ion-icon class="icon-small"  name="logo-twitter"></ion-icon>
                    <a href="#">@omnifood_ln</a>
                </div>

            </div>
            <div class="col span_1_of_4 box">
                <img src="resources/img/berlin.jpg" alt="lisbon">
                <h3>Berlin</h3>
                <div class="city-fea">
                    <ion-icon class="icon-small" name="person-circle-outline"></ion-icon>1900+ Happy Eaters
                    
                </div>
                <div class="city-fea">
                    <ion-icon class="icon-small"  name="star"></ion-icon>90+ Chefs
                    
                </div>
                <div class="city-fea">
                    
                    <ion-icon class="icon-small"  name="logo-twitter"></ion-icon>
                    <a href="#">@omnifood_br</a>
                </div>

            </div>

        </div>
    </section>
    <section class=" section-testimonials clearfix">
        <div class="row" >
            <h2>Our customer can't live without us</h2>
        </div>
        <div class="row ">
            <div class="col span_1_of_3" style="color:white">
                <blockquote>
                    Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                </blockquote>
                <cite><img src="resources/img/customer-1.jpg" alt="">
                    Alberto Duncan</cite>
                </div>
        </div>
        <div class="row" style="color:white">
            <div class="col span_1_of_3">
                <blockquote>
                    Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!</blockquote>
                <cite><img src="resources/img/customer-2.jpg" alt="">
                    Joana Silva</cite>
            </div>
        </div>
        <div class="row" style="color:white">
            <div class="col span_1_of_3">
                <blockquote>
                    I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                    </blockquote><cite><img src="resources/img/customer-3.jpg" alt="">
                        Milton Chapman</cite></div>
        </div>
    </section>
    <section class="section-plans">
        <div class="row">
            <h2>Start eating healthy today</h2>
        </div>
        <div class="row">
            <div class="col span_1_of_3" s>
                <div class="plan-box">
                    <div>
                        <h3>Premium</h3>
                        <p class="plan-price">$399<span>/year</span></p>
                        <p class="plan-price-meal">That's only $13.905 per month</p>
                    </div>
                    <div>
                        <ul >
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>1 meal everyday</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Order 24*7</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Access to newest creations</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Free Delivery</li>
                        </ul>
                    </div>
                    <div><a href="#" class="btn btn-ghost">Sign Up</a></div>
                </div>
            </div>
            <div class="col span_1_of_3">
                <div class="plan-box">
                    <div>
                        <h3>Pro</h3>
                        <p class="plan-price">$199 <span>/year</span></p>
                        <p class="plan-price-meal">That's only $10.905 per month</p>
                    </div>
                    <div>
                        <ul>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>1 meal in 5 days</li>
                            <li style="list-style: none;"> <ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Order 24*7</li>
                            <li style="list-style: none;"><ion-icon  class="icon-small" name="checkmark-outline"></ion-icon>Access to newest creations</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Free Delivery</li>
                        </ul>
                    </div>
                    <div><a href="#" class="btn btn-ghost">Sign Up</a></div>
                </div>
            </div>
            <div class="col span_1_of_3">
                <div class="plan-box">
                    <div>
                        <h3>Starter</h3>
                        <p class="plan-price">$19<span>/meal</span></p>
                        <p class="plan-price-meal"> &nbsp</p>
                    </div>
                    <div>
                        <ul>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>1 meal everyday</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Order 24*7</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="close-outline"></ion-icon>Access to newest creations</li>
                            <li style="list-style: none;"><ion-icon class="icon-small" name="checkmark-outline"></ion-icon>Free Delivery</li>
                        </ul>
                    </div>
                    <div><a href="#" class="btn btn-ghost" style="text-align: center;">Sign Up</a></div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-form clearfix">
        <div class="row">
            <h2>We're happy to hear from you</h2>
        </div>
        <div class="row">
            <form action="#" method="POST" class="contact-form">
                <div class="row">
                    <div class="col span_1_of_3">
                        <label >Name</label>
                    </div>
                    <div class="col span_2_of_3">
                        <input type="text" name="name" id="name" placeholder="Your name" required>
                    </div>

                </div>
                <div class="row">
                    <div class="col span_1_of_3">
                        <label >Email</label>
                    </div>
                    <div class="col span_2_of_3">
                        <input type="email" name="name" id="email" placeholder="Your email" required>
                    </div>

                </div>
                <div class="row">
                    <div class="col span_1_of_3">
                        <label >How did you find us?</label>
                    </div>
                    <div class="col span_2_of_3">
                        <select name="finc-us" id="find-us">
                            <option value="friends">Friends</option>
                            <option value="search">Search engine</option>
                            <option value="advertisement">Advertisement</option>
                            <option value="other">Other</option>
                        </select>    
                    </div>

                </div>
                <div class="row">
                    <div class="col span_1_of_3">
                        <label >Newsletter?</label>
                    </div>
                    <div class="col span_2_of_3">
                        <input type="checkbox" name="news" id="news" checked>
                    </div>

                </div>
                <div class="row">
                    <div class="col span_1_of_3">
                        <label >Drop a line</label>
                    </div>
                    <div class="col span_2_of_3">
                        <textarea name="text" id="ta" cols="30" rows="10"></textarea>
                    </div>

                </div>
                <div class="row">
                    <div class="col span_1_of_3">
                        <label >&nbsp</label>
                    </div>
                    <div class="col span_2_of_3">
                        <input type="button" value="Send-me">    
                    </div>

                </div>
            </form>
        </div>
    </section>
    <footer > 
        <div class="row" style="background-color:#333">
            <div class="col span_1_of_2">
                <ul class="footer-nav" style="margin-left: 30px;list-style: none;float:left">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">IOS App</a></li>
                    <li><a href="#">Android App</a></li>
                    
                </ul>
                
            </div>
            <div class="col span_1_of_2">
                <ul class="social-links" style="list-style: none;color:grey;font-style:none;" >
                    <li><a href="#"><ion-icon   name="logo-facebook"></ion-icon></a></li>
                    <li><a href="#"><ion-icon   name="logo-twitter"></ion-icon></a></li>
                    <li><a href="#"><ion-icon  name="logo-google"></ion-icon></a></li>
                    <li><a href="#"><ion-icon  name="logo-instagram"></ion-icon></a></li>
                    
                </ul>
            </div>
            
        </div>
        <p style="margin-left:30px;text-align: center;font-size:120%">Copyright&copy 2023 by omnifood.All rights reserved.</p>
                
    </footer>
    




    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</body>

</html>
