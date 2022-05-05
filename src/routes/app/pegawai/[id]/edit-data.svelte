<script>
  import { getContext } from 'svelte'
  import Field from '$lib/field.svelte'
  import Finput from '$lib/finput.svelte'
  import FSelect from '$lib/fselect.svelte'
  import FButton from '$lib/fbutton.svelte'

  const pegawai = getContext('pegawai');

  let payload = {
    nama: pegawai.nama,
    nip: pegawai.nip,
    nik: pegawai.nik
  }
</script>

<div class="border-b py-12">
  <div class="container px-4">
    <h1 class="text-2xl font-bold">Edit Data {pegawai.nama}</h1>
  </div>
</div>

<div class="container px-4 py-4">
  <form method="POST" enctype="multipart/form-data" class="w-full md:w-1/2 flex flex-col gap-y-3">
    <Field label="Nama">
      <Finput name="nama" bind:value={payload.nama} />
    </Field>
    <Field label="NIP">
      <Finput name="nip" bind:value={payload.nip} />
    </Field>
    <Field label="NIK">
      <Finput name="nik" bind:value={payload.nik} />
    </Field>
    <FButton primary>Simpan</FButton>
  </form>
</div>