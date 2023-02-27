var http = require('http');
const { Script } = require('vm');

var server = http.createServer(function(req, res ){
  if (req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    res.write('<html><body><p>Esta é uma Página Web!<script>console.log("NO BROWSER") </script></p></body></html>');
    console.log("Está No Servidor");
    res.end();
  }
  else if (req.url == "/estudante") {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<html><body><p> Esta é a Página do Estudante!</p></body></html');
    res.end();
  }

  else if (req.url == "/admin") {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<html><body><p> Esta é a Página do Administrador!</p></body></html>');
    res.end();
  }
  else
    res.end('Invalid Request ou Solicitação Inválida!'); 

});
server.listen(5000);
console.log('O Servidor Web está em execução na porta 5000 via Node.js');