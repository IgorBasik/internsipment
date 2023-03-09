let n = [2,3,4,5,6,7,8,9,10,11] 
        let sum = 0;
        for (let i=0; i < n.length; i++){
            if (n[i] % 2 == 0){
                sum += n[i];
            }
        }
   console.log(sum);