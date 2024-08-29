
// another way of exporting module directing
// module.exports=(a,b)=>{
//     return a+b;
// };

// module.exports=add;

// exporting using method
const add=(a,b)=>{
    return a+b;
};

const sub=(a,b)=>{
    return a-b;
};

module.exports={
    add,
    sub
};