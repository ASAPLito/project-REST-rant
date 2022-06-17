const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant-interior.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cafe.jpg'
    }];
    res.render('places/index', {places})
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
});

router.get('/new', (req, res) => {
    res.render('places/new')
});

module.exports = router;