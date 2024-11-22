const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require("mysql2");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load environment varirom .env file
dotenv.config();


// Use Router object to handle routes
const router = express.Router()
app.use(router)
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 

//image
app.use(express.static(path.join(__dirname, '/public'))); 


router.get('/', (req, res) => {
    console.log("going home")
    res.sendFile(path.join(__dirname, '/html/home.html'));
});

router.get('/Addproduct', (req, res) => {
    console.log("going add product")
    res.sendFile(path.join(__dirname, '/html/Addproduct.html'));
});

router.get('/Sunglasses', (req, res) => {
    console.log("going Sunglasses")
    res.sendFile(path.join(__dirname, '/html/Sunglasses.html'));
});

router.get('/Detail', (req, res) => {
    console.log("going Detail")
    res.sendFile(path.join(__dirname, '/html/Detail.html'));
});

router.get('/choice', (req, res) => {
    console.log("going choice")
    res.sendFile(path.join(__dirname, '/html/choice.html'));
});

router.get('/Glasses', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/Glasses.html'));
});

router.get('/Editproduct', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/Editproduct.html'));
});

router.get('/AboutUs', (req, res) => {
    console.log("going about us")
    res.sendFile(path.join(__dirname, '/html/AboutUs.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/login.html'));
});

router.get('/search', (req, res) => {
    console.log("going search page")
    res.sendFile(path.join(__dirname, '/html/search.html'));
});

router.get('/teampage', (req, res) => {
    console.log("going team page")
    res.sendFile(path.join(__dirname, '/html/teampage.html'));
});

router.get('/profile', (req, res) => {
    console.log("going profile page")
    res.sendFile(path.join(__dirname, '/html/profile.html'));
});

router.get('/CreateAdministratorAccount', (req, res) => {
    console.log("going CreateAdministrationAccount page")
    res.sendFile(path.join(__dirname, '/html/CreateAdministratorAccount.html'));
});

router.get('/contactus', (req, res) => {
    console.log("going shipping page")
    res.sendFile(path.join(__dirname, '/html/contactus.html'));
});

router.get('/repair', (req, res) => {
    console.log("going repair page")
    res.sendFile(path.join(__dirname, '/html/Repair.html'));
});

router.get('/ProductUsageGuide', (req, res) => {
    console.log("going ProductUsageGuide page")
    res.sendFile(path.join(__dirname, '/html/ProductUsageGuide.html'));
});

router.get('/shipping', (req, res) => {
    console.log("going shipping page")
    res.sendFile(path.join(__dirname, '/html/shipping.html'));
});

router.get('/edit_Administrator', (req, res) => {
    console.log("going edit admin")
    res.sendFile(path.join(__dirname, '/html/edit_Administrator.html'));
});
 
router.get(`/:path_name`, (req, res) => {
    const path_name = req.params.path_name;
    console.log(`going to ${path_name}`);
    res.sendFile(path.join(__dirname, `/html/${path_name}.html`));
});

const port = 8013
app.listen(port, () => {
        console.log(`Server listening on port: ${port}`)
});

