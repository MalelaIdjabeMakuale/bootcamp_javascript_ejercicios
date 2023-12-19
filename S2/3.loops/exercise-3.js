const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' },
   ];
   
   const newPlacesToTravel = placesToTravel.slice();
   
   for (let i = 0; i < newPlacesToTravel.length; i++) {
    if (newPlacesToTravel[i].id === 11 || newPlacesToTravel[i].id === 40) {
       newPlacesToTravel.splice(i, 1);
       i--;
    }
   }
   
   console.log(newPlacesToTravel);