<script>
    import { onDestroy } from "svelte";
    import settings from "../stores/settings";
    let colorScheme;
    const unsubscribe = settings.subscribe((settings) => {
        colorScheme = settings.colorScheme;
    });

    $: {
        // settings.set({ colorScheme });
        settings.update((settings) => ({ ...settings, colorScheme }));
    }

    onDestroy(unsubscribe);

</script>

<h2>Setings</h2>

<!-- {colorScheme} -->
<label>
    <input
        type="radio"
        bind:group={colorScheme}
        name="colorScheme"
        value="dark"
    /> Dark
</label>

<label>
    <input
        type="radio"
        bind:group={colorScheme}
        name="colorScheme"
        value="light"
    /> Light
</label>
