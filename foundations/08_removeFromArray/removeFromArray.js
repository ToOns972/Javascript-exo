const removeFromArray = function(arr,...args) {

    // code permettant de supprimer UNE valeur en fonction de son indice

    /*let lap = arr.length;
    for( let i=0; i <= lap; i++){
        arr.splice(args[i]-1,1);
        }
        return arr;
        */

    // code permettant de supprimer plusieurs valeur en fonction de l'indice et du type de valeur. Attention sur un choix multiple les indices sont décrémentés.

      /*args.forEach((args) => {
        let index = args-1;
        let key = arr.indexOf(args);
        if(typeof(args) == typeof(arr[index])){
            arr.splice(index,1);
        }else if(args == arr[key]){
            arr.splice(key,1);
        }
        
        return arr
    });
    */
     // bon code pour les tests
    let arr2 = [...new Set(arr)]
    args.forEach(args => {
        let key = arr2.indexOf(args);
        let index = args-1
        arr2.forEach(args=>{
        if(args == arr2[key]){
                arr2.splice(key,1);

            }
        })
        
        }
    );
    console.log(arr2);
    return arr2;
};
removeFromArray(["hey",2,3,3,3,3,3,3,3,"ho"],"hey",3);
// Do not edit below this line
module.exports = removeFromArray;
