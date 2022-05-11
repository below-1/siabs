<script context="module">
  export async function load({ params, session, fetch }) {
    const response = await fetch(`/app/absen/${params.id}/layout-data`, {
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
  import PageHeader from '$lib/page-header.svelte'  
  import FButton from '$lib/fbutton.svelte'
  import { client_fetch_json } from '$lib/http';
  import ModalConfirmation from '$lib/modal-confirmation.svelte'

  export let absen;

  setContext('absen', absen);

  let deleteModal = false;
  $: deleteMessage = `Apakah anda menghapus data absen #${absen ? absen.id : ''}`

  function showDeleteModal() {
    deleteModal = true;
    console.log(`deleteModal = ${deleteModal}`)
  }

  async function onDelete() {
    window.location = `/app/absen/${absen.id}/delete`
  }
</script>

<PageHeader>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <h1 class="text-2xl font-bold flex-grow">Detail Absensi #{absen.id}</h1>
    <FButton 
      danger
      on:click={showDeleteModal}
    >Hapus Absen</FButton>
  </div>
</PageHeader>

<div class="container px-4">
  <slot></slot>
</div>

<ModalConfirmation
  bind:show={deleteModal}
  message={deleteMessage}
  title="Konfirmasi Hapus Absen"
  onYes={onDelete}
/>
