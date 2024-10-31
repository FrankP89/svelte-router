<script>
  import { getContext } from "svelte";
  import formKey from "./form-key";

  import { v4 as uuid } from "uuid";

  export let name;
  export let type = "text";
  export let label = undefined;
  export let validate = undefined;

  const formStore = getContext(formKey);


  const id = uuid();
</script>

<!-- Show the json stringified version of the values -->
<!-- <pre>
    {JSON.stringify(values[name], null, 2)}
</pre> -->

<div class="field">
  {#if label}
    <label for={id}>
      {label}
    </label>
  {/if}

  <input 
  {id} 
  {name} 
  {type} 
  placeholder={label} 
  value={$formStore.values[name] || ""} 
  on:input={(e) => {
    $formStore.values[name] = e.currentTarget.value;
  }}/>
</div>

<style>
  div.field {
    margin-bottom: 10px;
  }
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    width: 250px;
    max-width: 100%;
  }
</style>
