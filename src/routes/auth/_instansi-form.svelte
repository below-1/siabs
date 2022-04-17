<script>
  import BaseSignupForm from './_base-signup-form.svelte'
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let nama = '';
  let alamat = '';
  let description = '';

  function on_next() {
    dispatch('next', {
      nama,
      alamat,
      description,
    });
  }
</script>

<BaseSignupForm error={false} {on_next}>
  <span slot="title"> Data Instansi</span>
  <div slot="content" class="has-text-left">
    <div class="field">
      <label class="label">Nama Instansi</label>
      <div class="control">
        <input bind:value={nama} class="input" type="text" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Alamat</label>
      <div class="control">
        <input bind:value={alamat} class="input" type="text" required />
      </div>
    </div>

    <div class="field">
      <label class="label">Deskripsi Singkat</label>
      <div class="control">
        <textarea bind:value={description} class="textarea" placeholder="Deskripsi singkat tentang instansi"></textarea>
      </div>
    </div>
  </div>
</BaseSignupForm>