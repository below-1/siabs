<svelte:head>
  <title>AbsensiAPP -- Signup</title>
</svelte:head>

<script>
  import UserForm from './_user-form.svelte'
  import InstansiForm from './_instansi-form.svelte'

  let step = 0;
  let current_step_valid = false;
  let payload = {};

  function on_next(event) {
    payload = {
      ...payload,
      ...event.detail
    }
    step += 1;
    if (step == 3) {
      
    }
  }

</script>

{#if step == 0}
  <UserForm on:next={on_next} />
{:else if step == 1}
  <InstansiForm on:next={on_next} />
{:else if step == 2}
  <div>
    Sedang memproses data...
  </div>
{/if}
