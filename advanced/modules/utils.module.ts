export const PI = 3.14;

export interface User { 
    id: string;
    name: string;
}

export const generateid = () => Math.floor(Math.random() *10000).toString();
 