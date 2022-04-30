<script>
  import {getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'

  const cu = getContext('currentUser');
  const user = cu.getUser();

  export let items = [];
</script>

<section class='section border-b border-gray-200'>
  <div class="container py-12 flex flex-col gap-y-4 px-4">
    <h1 class="font-black text-3xl">Daftar Pegawai</h1>
    <div class="flex flex-wrap gap-x-4">
      {#if user.superUser}
      <FButton 
        size="sm" 
        path="/app/pegawai/create"
        outline
      >
        tambah pegawai
      </FButton>
      {/if}
    </div>
  </div>
</section>

<section class="container">
  <ul class="w-full md:w-2/3">
    {#each items as item}
      <li class="px-4 border-b border-gray-200 py-4 flex items-center gap-x-4">
        <img
          class="w-12 h-12 rounded"
          src={`https://i.pravatar.cc/150?img=${item.id}`}
        />
        <div>
          <div class="text-lg font-bold">{item.nama}</div>
          <div class="text-sm">{item.nip}, {item.nik}</div>
        </div>
        <div class="flex-grow"></div>
        <a 
          href={`/app/pegawai/${item.id}/overview`}
          class="border border-gray-200 rounded bg-gray-50 px-2 py-1 font-semibold text-gray-500">
          detail
        </a>
      </li>
    {/each}
  </ul>
</section>
