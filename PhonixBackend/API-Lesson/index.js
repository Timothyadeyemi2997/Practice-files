const app = require('express') ();
const PORT = 8080;

app.listen(8080, () =>{
  console.log('Server is live now!')
});

app.get('/tshirt', (req, res) => {
  res.status(200).send({
  tshirt: '👕',
  size: 'large'
})
});


