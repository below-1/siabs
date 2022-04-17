<script context="module">
  import { browser } from '$app/env';
  import { page } from '$app/stores';

  export async function load({ params, session, fetch }) {
    const response = await fetch(`/app/pegawai/${params.id}/layout-data`, {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      }
    })
    const data = await response.json()
    return {
      status: 200,
      props: data
    }
  }
</script>

<script>
  import { setContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'

  export let pegawai;
  setContext('pegawai', pegawai)

  const menus = [
    { label: 'jadwal', path: `/app/pegawai/${pegawai.id}/jadwal` },
    { label: 'edit data', path: `/app/pegawai/${pegawai.id}/edit-data` },
    { label: 'hapus', path: `/app/pegawai/${pegawai.id}/hapus` }
  ]
</script>

<section class='section border-b border-gray-200'>
  <div class="container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8">

    <div class="col-span-12 md:col-span-2 flex flex-col justify-center items-center md:justify-center gap-y-2">
      <img
        src={pegawai.avatar}
        class="rounded-full h-32"
        alt="Gambar"
      />
    </div>

    <div class="col-span-12 md:col-span-4 flex flex-col items-center md:items-start justify-center text-gray-500">
      <div class="font-black text-2xl md:text-3xl text-black">{pegawai.nama}</div>
      <div class="font-semibold">{pegawai.unitKerja.nama}</div>
      <div class="font-semibold">NIP: {pegawai.nip}, NIK: {pegawai.nik}</div>
      <div class="flex flex-wrap gap-x-4">
      </div>
    </div>  

    <div class="col-span-12 md:col-span-6 flex items-center justify-center gap-x-4 whitespace-nowrap">
      {#each menus as menu}
        <FButton
          outline
          size="lg"
          path={menu.path}
        >
          {menu.label}
        </FButton>
      {/each}
    </div>
  </div>
</section>

<slot>
</slot>
