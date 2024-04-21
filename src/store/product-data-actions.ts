import axios from "axios";
import { productActions } from "./product-slice";

async function fetchHandler(path:string) {
    try {
        const request = await axios.get(path)
        
        if (request.data && request.data.length == 1) {
            return request.data[0];
        } else {
            return {};
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return {};
    }
}

export const fetchdata = () => {
    return async (dispatch: any) => {
        const uri: string = process.env.REACT_APP_SOURCE_URI || ""
        const data = await fetchHandler(uri);
        dispatch(productActions.replaceData(data));
    }
}

