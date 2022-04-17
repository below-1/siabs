<script>
  import {getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'

  const cu = getContext('currentUser');
  const user = cu.getUser();

  export let items = [];
</script>

<section class='section border-b border-gray-200'>
  <div class="container py-12 flex flex-col gap-y-4 px-4">
    <h1 class="font-black text-3xl">Daftar Jadwal</h1>
    <div class="flex flex-wrap gap-x-4">
      {#if user.isSuperAdmin || user.pegawai.isAdminUnitKerja}
      <FButton 
        size="sm" 
        path="/app/jadwal/create"
        outline
      >
        tambah jadwal
      </FButton>
      {/if}
    </div>
  </div>
</section>