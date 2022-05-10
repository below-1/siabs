<script>
  import { getContext } from 'svelte'
  import { page } from '$app/stores'
  import Field from '$lib/field.svelte'
  import Finput from '$lib/finput.svelte'
  import FFile from '$lib/ffile.svelte'
  import FButton from '$lib/fbutton.svelte'
  import PageHeader from '$lib/page-header.svelte'
  import { required, min_length, max_length, useValidation } from '$lib/validation'

  const cu = getContext('currentUser')
  const user = cu.getUser()
  export let item = {};

  $: verr = useValidation({
    nama: [ required('nama harus diisi') ],
    alamat: [required('alamat harus diisi')]
  }, item);
</script>

<section class="pb-12">
  <div class="container py-12 px-4 flex">
    {#if user.superUser}
    <div class="w-full md:w-1/2">
      <h1 class="text-2xl font-black mb-8">Edit Data Unit Kerja</h1>
      <form 
        method="post"
        enctype="multipart/form-data" 
        class="flex flex-col gap-y-4"
      >
        <Field label="Nama Unit kerja" error={verr.fields.nama}>
          <Finput name="nama" bind:value={item.nama} error={verr.fields.nama} />
        </Field>
        <Field label="Alamat Unit kerja">
          <textarea
            class="rounded px-2 py-1 font-semibold text-gray-700 border"
            rows=5
            bind:value={item.alamat}
            name="alamat"
          ></textarea>
        </Field>
        <Field label="Latitude">
          <Finput bind:value={item.latitude} name="latitude" />
        </Field>
        <Field label="Longitude">
          <Finput bind:value={item.longitude} name="longitude" />
        </Field>
        <Field label="Avatar">
          <FFile name="avatar" />
        </Field>
        <FButton 
          primary={true}
          size="lg">
          simpan data
        </FButton>
      </form>
    </div>
    {/if}
  </div>
</section>
