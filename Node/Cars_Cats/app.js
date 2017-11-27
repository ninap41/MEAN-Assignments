var http = require('http');

var fs = require('fs');

console.log('helloworld');

var server = http.createServer(function(request, response){

    if (request.url === '/cars'){

        fs.readFile('Views/cars.html', 'utf8', function(errors, contents){

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();

        });
    }
    else if (request.url === '/cats'){
        fs.readFile('Views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });

    }
    else if (request.url === '/cars/new'){
        fs.readFile('Views/new.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });

    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
      else if(request.url === '/images/pizza.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pizza.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/pizzacat.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pizzacat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/bob.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/bob.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      
    else{
        response.end('File not found!');
    }
})



server.listen(6789);
// localhost:6789/    This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new  
