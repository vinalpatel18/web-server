var express =require('express');

var app = express();

app.get('/',function (req,res) {
	res.send('Hello Express');
});

/*app.get('/About',function (req,res) {
	res.send('About us');
});
app.get('/Login',function (req,res) {
	res.send('Login us');
});

app.get('/Welcome',function (req,res) {
	res.send('Welcome us');
});

app.get('/Logout',function (req,res) {
	res.send('Logut us');
}); 
*/

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(3000);