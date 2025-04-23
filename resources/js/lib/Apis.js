import axios from "axios";

export const Enquiries = async (data) => {
    try {
        const res = axios.post('/enquiry', data);
        return res;
    }catch{
        return Error;        
    }
}