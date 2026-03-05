import axios from "axios";

class RequestHandler {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async get(baseUrl: string | null = null, endpoint: string, config = {}) {
        try {
            if(baseUrl) this.baseURL = baseUrl;
            const response = await axios.get(`${this.baseURL}${endpoint}`, config);
            console.log("response data from the backend::: ", response.data);
            return response.data;
        } catch (error: {[key: string | symbol]: any} | any) {
            console.error("Error in GET request: ", error);
            return {
                error: error?.response?.data?.error || 'An error occurred'
            };
        }
    }

    async post(endpoint: string, data: any, config = {}, baseUrl?: string | null) {
        try {
            if(baseUrl) this.baseURL = baseUrl;
            const response = await axios.post(`${this.baseURL}${endpoint}`, data, config);
            console.log("response data from the backend::: ", response.data);
            return response.data;
        } catch (error: {[key: string | symbol]: any} | any) {
            console.error("Error in POST request: ", error);
            return {
                error: error?.response?.data?.error || 'An error occurred'
            };
        }
    }
}

export default RequestHandler;
