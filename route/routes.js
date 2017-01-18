//function for home 
function homeR(req,res){
    res.render('home',{
        headline:'we belive that every city have something to say'
    })};

//function for city query parameter
function cityR(req,res){

    var cityName = req.params.city;
    var titleValue;
    var headlineValue;

    if(cityName ==='berlin'){
        titleValue='Berlin';
        headlineValue='Where love is in the air';

    }else if(cityName ==='paris'){
        titleValue='Paris';
        headlineValue='Good talkers are only found in Paris';

    }else if(cityName ==='madrid'){
        titleValue='Madrid';
        headlineValue='Buzz, Beautiful architecture and Football';
    }else if (cityName ==='london'){
        titleValue='London';
        headlineValue='Sparkling, Still, Food, Gorgeous'
    }else{
        titleValue='New York';
        headlineValue='Come to New York to become someone new';
    }

      res.render('city',{title: titleValue,
                            headline: headlineValue });
};
module.exports.cityFn = cityR;
module.exports.homeFn = homeR;