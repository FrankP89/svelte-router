<script>
    import { setContext, createEventDispatcher } from "svelte"; // We can define the context
    import { writable } from "svelte/store";
    import formKey from "./form-key";

    // To handle custom events
    const dispatcher = createEventDispatcher();

    export let initialValues = {};
    const formStore = writable({values: initialValues, errors: {}, showErrors: false});

    setContext(formKey, formStore);
</script>

<pre>{JSON.stringify($formStore, null, 2)}</pre>

<form on:submit|preventDefault={() => {
    // Ensure that the form is validated before submitting
    if (Object.keys($formStore.errors).length === 0) {
        dispatcher('submit', $formStore.values);
    } else {
        $formStore.showErrors = true;
    }
    
} } >
    <slot/>
</form>
