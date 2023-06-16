//When HoloMobHealth parses your placeholder, it will replace your defined placeholder text
//with the return value of this function

//In this example we will create a placeholder which shows the mob level of a mythic mob
function parse() {
    return Math.round(Math.abs(HealthChange/2))
}

parse();