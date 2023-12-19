let totalVolume = 0;
let numberOfSounds = 0;

for (let user of users) {
    for (let sound in user.favoritesSounds) {
        totalVolume += user.favoritesSounds[sound].volume;
        numberOfSounds++;
    }
}

let averageVolume = totalVolume / numberOfSounds;
console.log(averageVolume);