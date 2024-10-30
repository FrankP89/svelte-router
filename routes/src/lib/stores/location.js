import { readable } from "svelte/store";

export const location = readable(null, (set) => {
    let watchID;
    if (navigator.geolocation && navigator.geolocation.watchPosition) {
        watchID = navigator.geolocation.watchPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                set({latitude, longitude});
            }, 
            (error) => {
                set({error});
            });
    }
    return () => {
        // console.log('cleanup')
        if(navigator.geolocation && navigator.geolocation.clearWatch){
            navigator.geolocation.clearWatch(watchID);
            set(null);
        }

    }
})

export default location;