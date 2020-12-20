let unlinkedData=[];
let linkedKey={};
module.exports={
    unlinked:function(allUsers,linked){
        linked.map((data)=>{
            linkedKey[data.name]=data.name;
        });
        allUsers.filter(checkLinked);
        return unlinkedData;
    }
}

function checkLinked(user){

    const data=linkedKey[user.name];
    if(data)
    {

    }
    else{
        unlinkedData.push(user.name)
    }
   
}