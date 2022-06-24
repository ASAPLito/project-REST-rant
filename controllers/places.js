const router = require('express').Router();
const places = require('../models/places.js');

router.get('/', (req, res) => {
    res.render('places/index', {places})
});

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
});

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        console.log("NaN");
      res.render('error404')
    }
    else if (!places[id]) {
        console.log("array");
      res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
  })
  
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
      console.log("delete NaN")
    }
    else if (!places[id]) {
      res.render('error404')
      console.log("delete array does not exist")
    }
    else {
      places.splice(id, 1)
      console.log("delete redirect")
      res.redirect('/places')
    }
})
  
router.get('/new', (req, res) => {
    res.render('places/new')
});

//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: { ...places[id], id } })
  }
})

//PUT ROUTE
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log("This is ID: " + req.params.id);
  if (isNaN(id)) {
      res.render('error404')
      console.log("error is here at spot 1");
      //This is where my code is getting stuck.
      //This is the log statement that gets read.
  }
  else if (!places[id]) {
      res.render('error404')
      console.log("error is here at spot 2")
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
      console.log("edit page is working")
  }
})



module.exports = router;