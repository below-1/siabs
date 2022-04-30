<script>
  import {getContext } from 'svelte'
  import { page } from '$app/stores'
  import { client_fetch_json } from '$lib/http'
  import { required, min_length, max_length, useValidation } from '$lib/validation'
  import FButton from '$lib/fbutton.svelte'
  import Field from '$lib/field.svelte'
  import Finput from '$lib/finput.svelte'
  import FSelect from '$lib/fselect.svelte'

  export let unitKerjaOptions;

  const cu = getContext('currentUser');
  const user = cu.getUser();

  let nama = '';
  let nip = null;
  let nik = null;
  let isAdminUnitKerja = null;
  let username = '';
  let password = '';
  let unitKerjaId = null;

  $: payload = ({
    nama,
    nik,
    nip,
    isAdminUnitKerja,
    username,
    password,
    unitKerjaId
  });

  $: verr = useValidation({
    nama: [
      required('nama harus diisi'), 
      min_length('panjang nama minimal 6 karakter') 
    ],
    nik: [
      min_length(6, 'panjang NIK minimal 6 karakter') 
    ],
    nip: [
      min_length(6, 'panjang NIP minimal 6 karakter') 
    ],
    username: [
      required('username harus diisi'),
      min_length(6, 'panjang NIP minimal 6 karakter')
    ],
    password: [
      required('username harus diisi'),
      min_length(6, 'panjang NIP minimal 6 karakter')
    ],
  }, payload);

  function on_submit(e) {
    if (!verr.valid) {
      e.preventDefault();
      return false;
    }
  }
</script>

<section class='section border-b border-gray-200'>
  <div class="container py-12 flex flex-col gap-y-4 px-4">
    <h1 class="font-black text-3xl">Tambah Pegawai</h1>
  </div>
</section>

<section>
  <div class="container px-4 py-12">
    <div class="w-full md:w-1/2">
      <form class="flex flex-col gap-y-4" method="post" enctype="multipart/form-data" on:submit{on_submit}>
        <Field label="Nama Pegawai">
          <Finput name="nama" bind:value={nama} error={verr.fields.nama} />
        </Field>
        <Field label="NIK">
          <Finput name="nik" bind:value={nik} error={verr.fields.nik} />
        </Field>
        <Field label="NIP">
          <Finput name="nip" bind:value={nip} error={verr.fields.nip} />
        </Field>
        <Field label="Username">
          <Finput name="username" bind:value={username} error={verr.fields.username} />
        </Field>
        <Field label="Password">
          <Finput name="password" bind:value={password} error={verr.fields.password} />
        </Field>
        <FButton 
          primary={true} 
          disabled={!verr.valid}
          size="lg"
        >
          simpan data
        </FButton>
      </form>
    </div>
  </div>
</section>