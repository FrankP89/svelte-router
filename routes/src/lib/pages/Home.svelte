<!-- <script>
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
{/if} -->

<script>
    // import { writable } from "svelte/store";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    // const scale = writable(1);
    // const scale = tweened(1,
    //     {
    //         duration: 200,
    //         easing: cubicOut
    //     }
    // );
    const size = tweened({width: 100, height: 100},
        {
            duration: 100,
            easing: cubicOut
        }
    );
</script>

<!-- <button on:click={() => $size += 1}>
    Make it bigger
</button>

<button on:click={() => $size -= 1}>
    Make it smaller
</button> -->

<button on:click={async () => {
    await size.set({
        width: Math.floor(Math.random() * 500),
        height: Math.floor(Math.random() * 500)
    });
}}>
    <!-- Animation doesn't work with this approach! =>  -->
    <!-- $size.width = Math.floor(Math.random() * 500);
    $size.height = Math.floor(Math.random() * 500); -->

    Random Size
</button>


<div
    style="width:{$size.width}px; 
        height:{$size.height}px;
        background-color:purple;
        "
        >
        <!-- transform:scale({$scale});
        transform-origin:0 0" -->

</div>
