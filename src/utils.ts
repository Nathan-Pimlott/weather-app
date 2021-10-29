interface ILocationRes {
    coords: {
        latitude: number;
        longitude: number;
    };
}

export async function getLocation(): Promise<ILocationRes> {
    try {
        const positionRes: Promise<ILocationRes> = new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(resolve);
        });
        return positionRes;
    } catch (err) {
        throw Error();
    }
}
