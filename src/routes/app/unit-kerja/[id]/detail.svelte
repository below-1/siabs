<script>
  import { getContext } from 'svelte'
  import { page } from '$app/stores'
  import Field from '$lib/field.svelte'
  import Finput from '$lib/finput.svelte'
  import FButton from '$lib/fbutton.svelte'
  import { required, min_length, max_length, useValidation } from '$lib/validation'

  const cu = getContext('currentUser')
  const user = cu.getUser()
  export let item = {};


  $: verr = useValidation({
    nama: [ required('nama harus diisi') ],
    alamat: [required('alamat harus diisi')]
  }, item);

  let updateDataLoading = false;
  async function updateData() {
    const payload = {
      nama: item.nama,
      alamat: item.alamat,
      latitude: item.latitude,
      longitude: item.longitude,
    }
    updateDataLoading = true
    try {
      const response = await fetch($page.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const result = await response.json()
      console.log(result)
    } catch (err) {
      console.log(err)
    } finally {
      updateDataLoading = false
    }
  }

  let fileInput;
</script>

<input bind:this={fileInput} type="file" hidden />

<section class='section border-b border-gray-200'>

  <div class="container flex flex-wrap gap-y-6 px-4 py-4 md:px-none md:gap-x-8">

    <div class="w-full md:w-1/6 flex flex-col justify-center items-center md:justify-start gap-y-2">
      <img
        src={item.avatar}
        class="self-stretch"
        alt="Gambar"
      />
      <FButton 
        on:click={() => {
          console.log('here...')
          fileInput.click()
        }}
      >
        ganti gambar
      </FButton>
    </div>

    <div class="w-full md:w-auto flex flex-col items-center md:items-start justify-center text-gray-500">
      <div class="font-black text-2xl md:text-5xl text-black">{item.nama}</div>
      <div class="font-semibold md:text-xl">{item.alamat}</div>
      {#if item.latitude && item.longitude}
        <div class="font-semibold">{item.latitude}, {item.longitude}</div>
      {:else}
        <div class="text-gray-300 text-sm">Belum Ada informasi Geopoint</div>
      {/if}
      <div class="flex flex-wrap gap-x-4">
      </div>
    </div>



  </div>
</section>

<section class="pb-12">
  <div class="container py-12 px-4 flex">
    {#if user.superUser}
    <div class="w-full md:w-1/2">
      <h1 class="text-2xl font-black mb-8">Edit Data Unit Kerja</h1>
      <form 
        on:submit|preventDefault={updateData} 
        class="flex flex-col gap-y-4"
      >
        <Field label="Nama Unit kerja" error={verr.fields.nama}>
          <Finput bind:value={item.nama} error={verr.fields.nama} />
        </Field>
        <Field label="Alamat Unit kerja">
          <textarea
            class="rounded px-2 py-1 font-semibold text-gray-700 border"
            rows=5
            bind:value={item.alamat}
          ></textarea>
        </Field>
        <Field label="Latitude">
          <Finput bind:value={item.latitude} />
        </Field>
        <Field label="Longitude">
          <Finput bind:value={item.longitude} />
        </Field>
        <FButton 
          primary={true} 
          loading={updateDataLoading}
          size="lg">
          simpan data
        </FButton>
      </form>
    </div>
    {/if}
  </div>
</section>