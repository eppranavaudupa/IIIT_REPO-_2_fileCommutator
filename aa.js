const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { text } = require('stream/consumers');
const sender = async function senderFun(){
    try{
        await axios.post('http://192.168.194.254:8080/send',{
            text:text
        });
        console.log("text sent successfully");
    }
    catch(error){
        console.log(error);
    }
}
sender("WE BOTH ARE TRYING TO CONNECTING A NODE SERVER");