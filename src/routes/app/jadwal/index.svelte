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
  <div class="flex flex-col md:flex-row justify-between items-center gap-y-2">
    <h1 class="font-black text-3xl">Daftar Jadwal</h1>
    <div class="flex flex-wrap gap-x-4">
      {#if user.superUser }
      <FButton 
        size="lg" 
        path="/app/jadwal/create"
        primary
      >
        tambah jadwal
      </FButton>
      {/if}
    </div>
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
              <div class="font-bold text-lg">{item.display.hari}, {item.display.waktu}</div>
              <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold whitespace-nowrap text-gray-700">
                <span class="bg-gray-100 p-0.5 rounded">{item.unitKerja.nama}</span>
                <span class="bg-gray-100 p-0.5 rounded">Jadwal {item.type}</span>
              </div>
            </div>
            <div class="px-4 hidden md:block">
              {item._count.absen} pegawai
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>