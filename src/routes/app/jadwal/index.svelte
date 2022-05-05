<script>
  import {getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'

  const cu = getContext('currentUser');
  const user = cu.getUser();

  export let items = [];
</script>

<svelte:head>
  <title>Jadwal -- SIABS</title>
</svelte:head>

<section class='section border-b border-gray-200'>
  <div class="container py-12 flex flex-col gap-y-4 px-4">
    <h1 class="font-black text-3xl">Daftar Jadwal {items.length}</h1>
    <div class="flex flex-wrap gap-x-4">
      {#if user.superUser }
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

  <div class="container py-6 px-4">
    <table>
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Jam</th>
          <th>Unit Kerja</th>
          <th>Pegawai</th>
        </tr>
      </thead>
      <tbody>
        {#each items as item}
          <tr>
            <td>{item.hari}</td>
            <td>{item.waktu}</td>
            <td>{item.unitKerja.nama}</td>
            <td>12</td>
            <td>
              <a href={`/app/jadwal/${item.id}/overview`}>detail</a>
            </td>
          </tr>
        {/each}
        <tr>
          
        </tr>
      </tbody>
    </table>
  </div>
</section>