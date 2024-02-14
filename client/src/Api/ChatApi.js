import { publicRequest } from "../Request/RequestMethod";

export const ChatDataApi =()=>{
    try{

    }catch(err){
        console.log('error in fetching chat');
    }
}
export const ChatCreateApi = async ()=>{
    try{
        const newChat = await publicRequest.post()
        
    }catch(err){
        console.log('error in fetching chat');
    }
}