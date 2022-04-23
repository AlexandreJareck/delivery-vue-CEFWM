import axios from 'axios';

export default ( url: string = "http://localhost:8080" ) => {

    return axios.create({
        baseURL: url,
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTE1MzA1MzUsInVzZXJfbmFtZSI6ImFsZXhhbmRyZSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiYmM1YzRkM2EtYzdmZi00YjIwLTkyNjUtYTVlYmIzZDMzNjc4IiwiY2xpZW50X2lkIjoiYWxleGFuZHJlIiwic2NvcGUiOlsid3JpdGUiLCJyZWFkIl19.VLvc0gf1aXRl3rnC7MMRzr7Q7SLlLAX2b_4E37iKtLs"
        }
    });

}