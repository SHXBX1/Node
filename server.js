const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let items = [
    {name: 'Costa Rica Quest',image:"assets/images/backdrop01.png",rate:'5.0',location:"Central America"},
    {name: 'Wildlife Odyssey',image:"assets/images/backdrop02.png",rate:'4.8',location:"the Galapagos Islands"},
    {name: 'La Selva Lodge',image:"assets/images/backdrop03.png",rate:'5.0',location:"Amazon"},
    {name: 'Beaches & Rainforest',image:"assets/images/backdrop04.png",rate:'4.0',location:"Pacuare River"},
    {name: 'Incas and Rainforest',image:"assets/images/backdrop05.png",rate:'3.4',location:"Indonesia"},
    {name: 'Western Madagascar: River and Trekking Adventure',image:"assets/images/backdrop06.png",rate:'5.0',location:"Makay Massif"},
    {name: 'Ceiba Tops & Canopy Walkway',image:"assets/images/backdrop07.png",rate:'5.0',location:"Peruvian Amazon"},
    {name: 'Belize Explorer',image:"assets/images/backdrop08.png",rate:'5.0',location:"Ambergris Caye"},
    {name: "The World's Largest Macaw Lick",image:"assets/images/backdrop09.png",rate:'4.5',location:"Amazon"},
    {name: 'Refugio Amazonas Adventure',image:"assets/images/backdrop10.png",rate:'4.3',location:"Amazon Rainforest"},
    {name: 'Ceiba Tops Amazon Lodge',image:"assets/images/backdrop11.png",rate:'4.7',location:"Amazon"},
    {name: 'Manu Explorer',image:"assets/images/backdrop12.png",rate:'5.0',location:"Peruvian Amazon"},
];
// ROUTING
app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:name', (req, res) => {
    const item = items.find(i => i.name === req.params.name);

    res.json(item);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});