const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './sample2.mp3'); // Path to your MP3 file
const receiverUrl = 'https://8vfz7zxh-8000.inc1.devtunnels.ms/upload-audio'; // Replace with Deepak's IP address and port

const sendFile = async () => {
    try {
        const form = new FormData();
        form.append('audio', fs.createReadStream(filePath)); // 'audio' should match the expected key on Deepak's server

        const response = await axios.post(receiverUrl, form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        console.log('File uploaded successfully:', response.data);
    } catch (error) {
        console.error('Error uploading file:', error.message);
    }
};

sendFile();
