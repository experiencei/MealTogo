import {mocks} from "./mock";

const restaurantRequest = ( location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found")
        }

        resolve(mock)
    })
}

restaurantRequest().then((result) => {
    console.log();
}).catch((err) => {console.log(err);})