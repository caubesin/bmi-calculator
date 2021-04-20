export const getData = (key) => {
    if(!localStorage) return;
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch(e) {
        console.error(`Error getting item ${key} from localStorage`, e)
    }
}

export const storeData = (key, data) => {
    if(!localStorage) return;
    try {
        return localStorage.setItem(key,JSON.stringify(data));
    }
    catch(e) {
        console.err(`Error storing item ${key} to localStorage`, e);
    }
}