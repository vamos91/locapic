export default function(username = "", action){
    if(action.type === "user"){
        console.log(action.user)
        return username
    }else{
        return username
    }
}