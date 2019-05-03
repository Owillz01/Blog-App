
$(document).ready(function(){
	getPosts();
	// $("#dropdown").mouseover(function () {
	// 	$(".dropdown-menu").show()
	// })

	// $("#dropdown").mouseout(function () {
	// 	$(".dropdown-menu").hide()
	// })
	
	$('#accident').on('click', function(){ // ON CLICK, THIS ADDS A CLASS OF ACTIVE TO THE BUTTON 
		$(this).addClass('active');
		$('#Riot, #all, #fight').removeClass('active'); //THIS REMOVES A CLOSS OF ACTIVE FROM THE BUTTON
	})

	$('#accident').click(function(){
		$('div').filter('.2, .1').hide() //THIS HIDES THE SELECTED CLASSES i.e fight and riot DISPLAYING ONLY ACCIDENT CONTENTS
		$('div').filter('.3').css('display','inline')
	});


	//FIGHT
	$('#fight').on('click', function(){
		$(this).addClass('active');
		$('#all, #accident, #Riot').removeClass('active');
	})

	$('#fight').click(function(){
		$('div').filter('.1, .3').hide()
		$('div').filter('.2').css('display', 'inline')
	});


//RIOT
	$('#Riot').on('click', function(){
		$(this).addClass('active');
		$('#all, #fight, #accident').removeClass('active');
	})

	$('#Riot').click(function(){
		$('div').filter('.3, .2').hide()
		$('div').filter('.1').css('display','inline')
	});

//ALL

	$('#all').on('click', function(){
		$(this).addClass('active');
		$('#Riot, #accident, #fight').removeClass('active');
	});
	$('#all').click(function(){
		$('div').filter('.1, .2, .3').show()
	});

})

$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

// house rent platform

// $("#header .btn-group[role='group'] button").on('click', function(){
//     $(this).siblings().removeClass('active')
//     $(this).addClass('active');
// })

// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// app.use(cors())
 
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })


 document.getElementById('getPost').addEventListener('click', getPosts)
 		const url = 'http://owillz.onlinewebshop.net/wp-json/wp/V2/posts'

 		// GET FUNCTION STARTS HERE
       function getPosts(){
           fetch(url)  //http://owillz.onlinewebshop.net/wp-json/wp/V2/posts
           .then((res)  => res.json())

           .then((data)=> {
            //    function data()

            let content = '';
                data.forEach((post) => {
                	//let post.categories = [Accident, Fight, Riot]
                  //console.log(post.content.rendered);
                  //let img = post.content.rendered.querySelector('img').src
                  // console.log(img);
                  	//let category = document.getElementById('categories').innerHTML
                   content += `
                   				
                                  
	                        <div class="${post.categories}">
	                          <div class="shadow box">
	                            <h2>${post.title.rendered}</h2>
	                            <p>${post.excerpt.rendered}</p> <span><a href="${post.link}"  class=" btn btn-lg btn-outline-primary" target="_blank">Read More </a></span> <hr>
		                      </div>  
                        </div>
                        
                   `;
               });
               document.getElementById('content').innerHTML = content;
           })

           .catch((err) => alert(err))
       }

       //GET FUNCTION ENDS HERE

       //POST FUNCTION STARTS HERE
       document.getElementById('addPost').addEventListener('submit', sendPost)
       document.getElementById('addPost').addEventListener('submit', getPosts)


       function sendPost(e){
       	e.preventDefault();
       	// const username = 'author'
       	// const password = '51DB8b8WO)SZcDAuxmWj1kqU'
       	const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vd2lsbHoub25saW5ld2Vic2hvcC5uZXQiLCJpYXQiOjE1NTY3ODEzMzcsIm5iZiI6MTU1Njc4MTMzNywiZXhwIjoxNTU3Mzg2MTM3LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI0In19fQ.Jz2--TGeXrjIGizCsEIeQXTYd9MZDjVoVhG6j0gC2b8'
       	let title = document.getElementById('title').value
	    let body = document.getElementById('body').value
	    let image = document.getElementById('image').src
	    //let authString =`${username}:${password}`
	    
	    fetch(url, {
		method: 'POST',
		headers:{
	    	'Accept': 'aplication/json, text/json, */*',
	    	'Access-Control-Allow-Origin':'*',
	    	'Origin': '',
	    	'crossDomain': true,
	    	'content-type': 'aplication/json',
	    	'authorisation' : 'Bearer' + token //'Basic ' + btoa( 'author : 51DB8b8WO)SZcDAuxmWj1kqU'),
	    	// 'Access-Control-Allow-Headers': 'Authorization, Content-Type',
	    	// 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers',
	    	// 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	    	// 'Access-Control-Expose-Headers': 'Authorization',
	    	// 'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, crossDomain, Content-Type, Accept, Access-Control-Request-Method, Authorization'

	       	},
	     body: JSON.stringify({title:title, body:body, image:image})
	    })

	    .then((res) => res.json())
	    .then((data) => console.log(data))
	    

	    .catch((err) => alert(err))
       }

       
       $(document).on('load', function(){
          	$('div').filter('load').hide()
       });