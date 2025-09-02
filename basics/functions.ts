interface ResponseServiceCD {
    id: number;
    name: string;
    charge: string;
    number: number;
}

const responseData : ResponseServiceCD = {
    id: 1,
    name:"Service CD",
    charge:"Developer",
    number : 10,
}

function handleResponse({number,...other}: ResponseServiceCD): number {
    console.warn({other});
    return number;
}

handleResponse(responseData);