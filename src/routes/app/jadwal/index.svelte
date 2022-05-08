<script>
  import {getContext } from 'svelte'
  import PageHeader from '$lib/page-header.svelte'
  import FButton from '$lib/fbutton.svelte'
  import { date } from '$lib/format/jadwal'

  const cu = getContext('currentUser');
  const user = cu.getUser();

  export let items = [];
  $: formatted_items = items.map(date);
</script>

<svelte:head>
  <title>Jadwal -- SIABS</title>
</svelte:head>

<PageHeader>
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
</PageHeader>

<section class="section">
  <div class="container py-6 px-4">
    <ul class="flex flex-col">
      {#each formatted_items as item}
        <li>
          <a href={`/app/jadwal/${item.id}/overview`} 
            class="flex items-center border-b py-4 gap-x-4"
          >
            {#if (item.status == 'Draft')}
              <div class="rounded-full h-4 w-4 bg-yellow-400"></div>
            {:else if (item.status == 'Published')}
              <div class="rounded-full h-4 w-4 bg-green-400"></div>
            {/if}
            <div class="flex-grow text-sm">
              <div class="font-bold text-lg">{item.formatted.hari}, {item.formatted.waktu}</div>
              <div>{item.unitKerja.nama}</div>
            </div>
            <div class="px-4">
              {item._count.absen} pegawai
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>