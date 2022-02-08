import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.github.com"
/*    client_id: "Iv1.b935c0cbc883c7f9",
    client_secret: "32f5b03015ed722d80acbca4ce653799adf280cb", */
})

export default api;