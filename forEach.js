function doubleValues(arr){
    let newArray = [];
   arr.forEach(function(val){
       newArray.push(val * 2)
   })

   return newArray;
}

function onlyEvenValues(arr){
  let newArray = [];
   arr.forEach(function(val){
       if(val % 2 === 0){
         newArray.push(val); 
       } 
   });

   return newArray;
}



function showFirstAndLast(arr){
  let newArray = [];
   arr.forEach(function(val){
    newArray.push(val[0] + val [val.length - 1])
   })

   return newArray;
   
}


function addKeyAndValue(arr,key,value){
   arr.forEach(function(val){
    val[key] = value;
   });

   return arr;
   
   
}


function vowelCount(str){
   let newArray = str.split('');
  let obj = {};
  const vowels = 'aeiou';


   newArray.forEach(function(letter){
    let lowerCaseLetter = letter.toLowerCase();
    if(vowels.indexOf(lowerCaseLetter) !== -1){
       if(obj[lowerCaseLetter]){
           obj[lowerCaseLetter]++;
       }
       else{
           obj[lowerCaseLetter] = 1;
       }
    }
   });

   return obj;
   
}



function doubleValuesWithMap(arr) {
return arr.map(function(val){
   return val * 2;
});
}

function valTimesIndex(arr){
   return arr.map(function(val, ind){
       return val * ind;
   
});
}



function extractKey(arr, key){
   return arr.map(function(val){
       return val[key];
   });
   
}


function extractFullName(arr){
   return arr.map(function(val){
       return val.first + ' ' + val.last;
   });
   
}



function filterByValue(arr, key) {
return arr.filter(function(val){
   return val[key] !== undefined;
});

}



function find(arr, searchValue) {
   return arr.filter(function(val){
       return val === searchValue;
   })[0];
   

}


function findInObj(arr, key, searchValue) {
   return arr.filter(function(val){
       return val[key] === searchValue;
   })[0];
   
}



function removeVowels(str) {
   const vowels = 'aeiou';
   return str.toLowerCase().split(""). filter(function(val){
       return vowels.indexOf(val) === -1;
   })
   .join("");
}



function doubleOddNumbers(arr) {
   return arr.filter(function(val){
       return val % 2 !== 0;
   })

   .map(function(val){
       return val * 2;
   })

}
