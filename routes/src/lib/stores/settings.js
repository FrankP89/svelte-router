// Writable stores (access to data anywhere - read/write)
import { writable } from 'svelte/store'

// const settings = writable({
//     colorScheme: 'dark',
//     language: 'en',
//     fontSize: 12
// // }, (set) => {
// //     const timer = setTimeout(() => {
// //         set({
// //             colorScheme: 'light',
// //             language: 'en',
// //             fontSize: 12
// //         })
// //     }, 1000);
// //     return () => {
// //         clearTimeout(timer);
// //     }
// });
// export default settings;

const defaultSettings = {
    colorScheme: 'dark',
    language: 'en',
    fontSize: 12
};
function createSettingsStore() {
    const { subscribe, set, update } = writable
    ({...defaultSettings});
    return {
        subscribe,
        set,
        update,
        updateSetting: (setting, value) => {
            update((settings) => (
                {...settings, [setting]:value}
            ))
        },
        toggleColorScheme: () => {
            update((settings) => ({
                ...settings,
                colorScheme: settings.colorScheme === 'dark' ? 'light' : 'dark'
            }))
        },
        reset: () => {
            set({...defaultSettings})
        }
    }
}



export default createSettingsStore();