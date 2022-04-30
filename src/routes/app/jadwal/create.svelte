<script>
  import {getContext } from 'svelte'
  import { page } from '$app/stores'
  import { client_fetch_json } from '$lib/http'
  // import { required, min_length, max_length, useValidation } from '$lib/validation'
  import FButton from '$lib/fbutton.svelte'
  import Field from '$lib/field.svelte'
  import FDate from '$lib/fdate.svelte'
  import FTime from '$lib/ftime.svelte'
  import Finput from '$lib/finput.svelte'
  import FSelect from '$lib/fselect.svelte'

  const cu = getContext('currentUser');
  const user = cu.getUser();

  export let unitKerjaList = [];
  $: unitKerjaOptions = unitKerjaList.map(uk => ({
    text: uk.nama,
    value: uk.id
  }))

  let hari = '';
  let waktu = '';

  $: payload = ({
    hari,
    waktu,
  });
</script>

<section class='section border-b border-gray-200'>
  <div class="container py-12 flex flex-col gap-y-4 px-4">
    <h1 class="font-black text-3xl">Tambah Jadwal</h1>
  </div>
</section>

<section>
  <div class="container px-4 py-12">
    <div class="w-full md:w-1/2">
      <form 
        class="flex flex-col gap-y-4" 
        method="post" 
        enctype="multipart/form-data" 
        on:submit{on_submit}
      >
        <Field label="Tanggal">
          <FDate name="hari" bind:value={hari} />
        </Field>
        <Field label="Waktu">
          <FTime name="waktu" bind:value={waktu} />
        </Field>
        <Field label="Pilih Unit Kerja">
          <FSelect
            name="unitKerja"
            options={unitKerjaOptions}
          />
        </Field>
        <FButton 
          primary={true}
          size="lg"
        >
          simpan data
        </FButton>
      </form>
    </div>
  </div>

</section>