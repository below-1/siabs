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
  import { setContext, getContext, onMount } from 'svelte'
  import PageHeader from '$lib/page-header.svelte'
  import FButton from '$lib/fbutton.svelte'
  import ModalConfirmation from '$lib/modal-confirmation.svelte'

  export let pegawai;
  setContext('pegawai', pegawai)

  const { getUser } = getContext('currentUser');
  const currentUser = getUser();

  const menus = [
    { label: 'overview', path: `/app/pegawai/${pegawai.id}/overview`, icon: '<ion-icon name="apps-outline"></ion-icon>' },
    { label: 'jadwal', path: `/app/pegawai/${pegawai.id}/jadwal` },
    { label: 'edit data', path: `/app/pegawai/${pegawai.id}/edit-data` },
    { label: 'hapus', path: `/app/pegawai/${pegawai.id}/hapus` }
  ]

  let deleteModal = false;
  $: deleteMessage = `Apakah anda menghapus data pegawai #${pegawai ? pegawai.id : ''}`

  function showDeleteModal() {
    deleteModal = true;
    console.log(`deleteModal = ${deleteModal}`)
  }

  async function onDelete() {
    window.location = `/app/pegawai/${pegawai.id}/delete`
  }
</script>

<PageHeader>
  <div class="container grid grid-cols-12">
    <img class="hidden md:block h-20 rounded" src="https://i.pravatar.cc/150?img=${pegawai.id}" />
    <div class="col-span-12 md:col-span-6 flex flex-col items-center md:items-start justify-center text-gray-500 mb-4">
      <img class="h-32 md:hidden rounded-full" src="https://i.pravatar.cc/150?img=${pegawai.id}" />
      <div class="font-black text-lg md:text-xl text-black">{pegawai.nama}</div>
      <div class="font-black text-lg text-black">{pegawai.user.username}</div>
      <div class="text-sm font-semibold">NIP: {pegawai.nip}, NIK: {pegawai.nik}</div>
      <div class="text-sm flex flex-wrap gap-x-4">
      </div>
    </div>
    <div class="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end">
      <FButton size="sm" danger on:click={showDeleteModal}>hapus pegawai</FButton>
    </div>
  </div>
</PageHeader>

<section class='section border-b border-gray-200'>
  <div class="bg-gray-50 border-b">
    <div class="container flex items-center justify-start md:gap-x-4 whitespace-nowrap">
      {#each menus as menu}
        <a 
          href={menu.path}
          class="text-gray-600 px-4 py-2 hover:bg-gray-50 hover:bg-gray-200 rounded flex-grow md:flex-grow-0"
        >
          {menu.label}
        </a>
      {/each}
    </div>
  </div>
</section>

<slot>
</slot>

<ModalConfirmation
  bind:show={deleteModal}
  message={deleteMessage}
  title="Konfirmasi Hapus Absen"
  onYes={onDelete}
/>
