let DummyDataGenerator = (person) => {
    let hour = randomNumber(0, 12);
    let min = randomNumber(0, 60);
    let dummyVehicles = ['Mercedes', 'Tır', 'Volkswagen', 'Ferrari', 'Kamaz', 'F16', 'Tesla', 'Ford', 'Anka', 'Traktör']

    return {
        name: `${setHour(hour, min)}:${min < 30 ? '30' : '00'} Vardiyası`,
        vehicle: dummyVehicles[Math.floor(Math.random() * 10) + 1],
        time: `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`,
        driver: person.name,
        helper: '-',
        performance: `${randomNumber(0, 100)}/${randomNumber(100, 200)}`,
        status: randomNumber(0, 10) > 5 ? 'Dispatched' : 'Finished'
    }
}

var randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

var setHour = (hour, min) => {
    if (min > 30) 
        hour++;
    if(hour === 24) 
        return "00"
    
    return hour < 10 ? '0' + hour : hour;
}

export default DummyDataGenerator