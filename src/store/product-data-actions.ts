import axios from "axios";


async function fetchData(path:string) {
    try {
        const request = await axios.get(path)
        
        if (request.data) {
            console.log(request.data)
            return request.data;
        } else {
            return {};
        }
    } catch (error) {
        console.error('Error fetching data: ', error)
    }
}

