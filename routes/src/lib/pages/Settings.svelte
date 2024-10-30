<script>
    // import { onDestroy } from "svelte";
    import settings from "../stores/settings";
    // let colorScheme;
    // const unsubscribe = settings.subscribe((settings) => {
    //     colorScheme = settings.colorScheme;
    // });

    // $: {
    //     // settings.set({ colorScheme });
    //     settings.update((settings) => ({ ...settings, colorScheme }));
    // }

    // onDestroy(unsubscribe);
</script>

<h2>Setings</h2>

<button
    on:click={() => {
        settings.toggleColorScheme();
    }}
>
    <!-- $settings.colorScheme = $settings.colorScheme === "dark" ? "light" : "dark"; -->
    Toggle Color Scheme
</button>

<!-- {clabel>
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
olorScheme} -->

<button
    on:click={() => {
        settings.updateSetting("language", "de");
    }}
>
    Update Language
</button>

<button on:click={() => {
    settings.reset();
}}>
Reset Settings
</button>



<br />
{$settings.language}
<br />

<label>
    <input
        type="radio"
        bind:group={$settings.colorScheme}
        name="colorScheme"
        value="dark"
    /> Dark
</label>

<label>
    <input
        type="radio"
        bind:group={$settings.colorScheme}
        name="colorScheme"
        value="light"
    /> Light
</label>
