const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
};

const fetchAPI = date =>{
  let arr = JSON.parse(localStorage.getItem("storedArray"));
  let day = date.getDate();
  let result = [];
  let random = seededRandom(day);
  for(let i = 17; i <= 23; i++){
      if(random() < 0.5) result.push({id:i+parseInt('00'), time: i + ':00'});
      if(random() < 0.5) result.push({id:i+parseInt('30'),time: i + ':30'});
    }
  // let filteredResult = result;
  if (arr!==null){
    for (let x=0;x<arr.length;x++) {
      if (arr[x].day ===day) {
        for (let y=0;y<result.length;y++) {
          if(result[y].time === arr[x].time) {
            // eslint-disable-next-line
            result = result.filter(t => t.time !== result[y].time);
          }
        }
      }
    }
    return result;
  }
  else {
    return result;
  }
};

function submitAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

export {fetchAPI,submitAPI}


