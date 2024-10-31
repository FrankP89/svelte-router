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

<!-- <script>
    // import { writable } from "svelte/store";
    // import { tweened } from "svelte/motion";
    import { spring } from "svelte/motion";
    // import { cubicOut } from "svelte/easing";
    // import { interpolateRgb } from "d3-interpolate";

    // const scale = writable(1);
    // const scale = tweened(1,
    //     {
    //         duration: 200,
    //         easing: cubicOut
    //     }
    // );
    // const boxProps = tweened(
    //     {width: 100, height: 100, color: 'purple'},
    //     {
    //         duration: 700,
    //         easing: cubicOut,
    //         interpolate: (a, b) => (t) => {
    //             const deltaWidth = b.width - a.width;
    //             const deltaHeight = b.height - a.height;
    //             const color = interpolateRgb(a.color, b.color);
    //             return {
    //                 width: a.width + (deltaWidth) * t,
    //                 height: a.height + (deltaHeight) * t,
    //                 color: color(t)

    //             }
    //         }
    //     }
    // );

    const boxProps = spring(
        { width: 100, height: 100 },
        {
            stiffness: 0.1,
            damping: 0.3,
        },
    );
</script> -->

<!-- <button on:click={() => $size += 1}>
    Make it bigger
</button>

<button on:click={() => $size -= 1}>
    Make it smaller
</button> -->

<!-- <button
    on:click={async () => {
        await boxProps.set({
            width: Math.random() * 500,
            height: Math.random() * 500,
        },{
            // hard:true
            soft: 1
        });
        console.log(boxProps);
    }}
> -->
<!-- Use Tweened for color and size interpolation -->
<!-- color: `#${Math.floor(Math.random() * 16777215).toString(16)}` -->

<!-- Animation doesn't work with this approach! =>  -->
<!-- $size.width = Math.floor(Math.random() * 500);
    $size.height = Math.floor(Math.random() * 500); -->

<!-- Random Box -->
<!-- </button> -->

<!-- <div
    style="width:{$boxProps.width}px; 
        height:{$boxProps.height}px;
        background-color:purple;"
> -->
<!-- transform:scale({$scale});
        transform-origin:0 0" -->
<!-- </div> -->

<!-- Use this section for: -->
<!-- Context API -->

<script>
    import Button from "../components/Button.svelte";

    // let values = {
    //     username: "",
    //     email: "",
    //     password: ""
    // };
    // let errors = {};

    // function validate(){
    //     const errors = {};
    //     if(!values.username){
    //         errors.username = "The Username is required";
    //     }
    //     if(!values.email){
    //         errors.email = "The Email is required";
    //     }
    //     if(!values.password){
    //         errors.password = "The Password is required";
    //     }
    //     if (values.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    //         errors.email = "The Email is invalid";
    //     }
    //     return errors;

    // }

    // let isSubimitting = false;

    import Form from "../form/Form.svelte";
    import Field from "../form/Field.svelte";
</script>

<!-- {JSON.stringify(values)}
<form on:submit|preventDefault={() => {
    errors = validate();
    console.log(values);
    if(Object.keys(errors).length > 0){
        return;
    }
    isSubimitting = true;
    setTimeout(() => {
        isSubimitting = false;
    }, 1000);
}}>
    <label for="username">
        Username:
    </label> <br />
    <input id="username" name="username" type="text" bind:value={values.username}/><br />
    {#if errors.username}
    <p>{errors.username}</p>
    {/if}


    <label for="email">
        Email:
    </label> <br />
    <input id="email" name="email" type="email" bind:value={values.email}/><br />
    {#if errors.email}
    <p>{errors.email}</p>
    {/if}


    <label for="password">
        Password:
    </label> <br />
    <input id="password" name="password" type="password" bind:value={values.password}/><br />
    {#if errors.password}
    <p>{errors.password}</p>
    {/if}



    <Button type="submit"
    disabled={isSubimitting}>
        Submit
    </Button>

</form> -->

<Form on:submit={(e) => {
    console.log(e.detail);
    console.log("Submitted");
}} 
    initialValues={{username:'Test', email:'test@example.com'}}>
    <Field label="Username" name="username" type="text"     validate={() => {}} />
    <Field label="Email"    name="email"    type="email"    validate={() => {}} />
    <Field label="Password" name="password" type="password" validate={() => {}} />
    <Button type="submit">Submit</Button>
</Form>
