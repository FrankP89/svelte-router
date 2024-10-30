<script>
    // import { onDestroy } from "svelte";
    import settings from "../stores/settings";
    import { location } from "../stores/location";
    // let colorScheme;
    // const unsubscribe = settings.subscribe((settings) => {
    //     colorScheme = settings.colorScheme
    // })

    // onDestroy(unsubscribe);
</script>

<h2>Home</h2>

{$settings.colorScheme}

{#if $location && !$location.error}
    <p>Your location is: {$location.latitude}, {$location.longitude}</p>
{/if}
{#if $location && $location.error}
    <p>{$location.error}</p>
    <p>Location not available</p>
{/if}
