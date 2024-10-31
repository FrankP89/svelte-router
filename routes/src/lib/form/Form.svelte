<script>
    import { setContext, createEventDispatcher } from "svelte"; // We can define the context
    import { writable } from "svelte/store";
    import formKey from "./form-key";

    // To handle custom events
    const dispatcher = createEventDispatcher();

    export let initialValues = {};
    const form = writable({values: initialValues, errors: {}});

    setContext(formKey, form);
</script>

<pre>{JSON.stringify($form, null, 2)}</pre>

<form on:submit|preventDefault={() => {
    dispatcher('submit', $form.values);
} } >
    <slot/>
</form>
