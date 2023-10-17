const cities = [
    {
        id: 1,
        name: 'Tokyo',
        country: 'Japan',
        estimatedPopulation: 37468000,
        inAsia: true,
        otherCities: ['Yokohama','Osaka','Nagoya']
    },
    {
        id: 2,
        name: 'Delhi',
        country: 'India',
        estimatedPopulation: 28514000,
        inAsia: true,
        otherCities: ['Bengaluru','Visakhapatnam','Hyderabad']
    },
    {
        id:3,
        name: "Shanghai",
        country: 'China',
        estimatedPopulation: 25582000,
        inAsia: true,
        otherCities: ['Beijing','Guangzhou','Shenzhen']
    },
    {
        id:4,
        name: "Sao Paulo",
        country: 'Brazil',
        estimatedPopulation: 21650000,
        inAsia: false,
        otherCities: ['Rio de Janerio','Brasilia','Fortaleza']
    },
    { 
        id:5,
        name: "Mexico City",
        country: 'Mexico',
        estimatedPopulation: 21581000,
        inAsia: false,
        otherCities: ['Tijuana','Ecatepec','Leon']
    },
    {
        id:6,
        name: "Cairo",
        country: 'Egypt',
        estimatedPopulation: 20076000,
        inAsia: false,
        otherCities: ['Alexandria','Giza','Shubra El-Kheima']
    },
    { 
        id:7,
        name: "Mumbai",
        country: 'India',
        estimatedPopulation: 19980000,
        inAsia: true,
        otherCities: ['Delhi','Bengaluru','Visakhapatnam']
    },
    {
        id:8,
        name: "Beijing",
        country: 'India',
        estimatedPopulation: 19618000,
        inAsia: true,
        otherCities: ['Guangzhou','Shengzhen','Chengdu']
    },
    { 
        id:9,
        name: "Dhaka",
        country: 'Bangladesh',
        estimatedPopulation: 19578000,
        inAsia: true,
        otherCities: ['Chittagong','Khulna','Bogra']
    },
    {
        id:10,
        name: "Osaka",
        country: 'Japan',
        estimatedPopulation: 19281000,
        inAsia: true,
        otherCities: ['Tokyo','Yokohama','Nagoya']
    }

]

cities.forEach((cities)=>{
    console.log('Population Rank',cities.id);
    console.log('Name:',cities.name);
    console.log('Estimated Population:',cities.estimatedPopulation);
    console.log('Other Cities of Same Country:',cities.otherCities);
    cities.otherCities.forEach((poop)=>{
        console.log(poop);
    })

});

const asianCities = cities.filter((stinky)=> {return stinky.inAsia === true})
console.log('Asian cities',asianCities);