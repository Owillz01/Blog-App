 document.getElementById('getPost').addEventListener('click', getPosts)

       function getPosts(){
           fetch('http://owillz.onlinewebshop.net/wp-json/wp/V2/posts')
           .then((res)  => res.json())
           .then((data)=> {
            //    function data()
            let content = '';
                data.forEach((post) => {
                  //console.log(post.content.rendered);
                  let img = post.content.rendered.querySelector('img').src
                  console.log(img);
                   content += `
                        <div class="row">
                         <div class="col-md-6">
                            ${img}
                            <h2>${post.title.rendered}</h2>
                            <p>${post.excerpt.rendered}</p> <span style="font-weight: bold;" class="btn btn-primary" type="button"><a style="color:white; " href="${post.link}" target="_blank">Read More </a></span> <hr><br>
                        </div>
                        </div>
                   `;
               });
               document.getElementById('content').innerHTML = content;
           })
       }