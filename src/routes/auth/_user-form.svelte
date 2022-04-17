<script>
  import BaseSignupForm from './_base-signup-form.svelte'
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let username = '';
  let password = '';
  let password_repeat = '';

  function on_next() {
    dispatch('next', {
      username,
      password,
      password_repeat,
    });
    console.log('next');
  }

  $: password_match = password == password_repeat;
</script>

<BaseSignupForm error={!password_match} {on_next}>
  <span slot="title">Data User</span>
  <div slot="content" class="has-text-left">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input class="input" type="text" required name="username" />
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input 
          bind:value={password}
          class="input" 
          class:is-danger={!password_match}
          type="password" 
          required 
          name="password" />
      </div>
    </div>
    <div class="field">
      <label class="label">Ulangi Password</label>
      <div class="control">
        <input 
          bind:value={password_repeat}
          class="input" 
          class:is-danger={!password_match}
          type="password" 
          required
        />
      </div>
    </div>
  </div>
</BaseSignupForm>
