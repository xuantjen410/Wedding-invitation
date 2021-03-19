const exports = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wedding-invitation'));
app.get('*', function (req, res){
res.sendFile(path.join(__dirname, 'dist/wedding-invitation/index.html'));
});
app.listen(process.env.PORT ||8080);