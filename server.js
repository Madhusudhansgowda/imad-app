var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:"Another-one",
    heading:"page content first",
    content:`There are a number of implementations of the BeanFactory interface that are come straight out-of-the-box with Spring. The most commonly used BeanFactory implementation is the XmlBeanFactory class. This container reads the configuration metadata from an XML file and uses it to create a fully configured system or application.

    There are a number of implementations of the BeanFactory interface that are come straight out-of-the-box with Spring. The most commonly used BeanFactory implementation is the XmlBeanFactory class. This container reads the configuration metadata from an XML file and uses it to create a fully configured system or application.
    `
};
function createtemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.heading;
var htmlTemplate=`<html>
<head>
    <title>
       $(title)
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
    <style>
       
    </style>
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>home</a>
        </div>
        <div>
            $(heading)
        </div>
        <div>
            $(content)
        </div>
        </div>
    </body>
</html>
`;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/another-two',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'another-two.html'));
});
app.get('/another-one',function (req,res){
    res.send(createtemplate(anotherone));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
