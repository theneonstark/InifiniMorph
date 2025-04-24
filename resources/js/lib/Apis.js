import axios from "axios";

export const Enquiries = async (data) => {
    try {
        const res = axios.post('/enquiry', data);
        return res;
    }catch(err){
        return Error,err;        
    }
}

export const store = async (data) => {
    try{
        const res = axios.post('/admin/store', data);
        return res;
    }catch(err){
        return Error,err;
    }
}

export const check = async (logdata) => {
    try{
        const res = axios.post('/admin/check', logdata);
        return res;
    }catch(err){
        return Error,err;
    }
}