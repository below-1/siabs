<script>
  import {getContext } from 'svelte'
  import { browser } from '$app/env'

  import PageHeader from '$lib/page-header.svelte'
  import FButton from '$lib/fbutton.svelte'
  import FInput from '$lib/finput.svelte'
  import { client_fetch_json } from '$lib/http'

  const cu = getContext('currentUser');
  const user = cu.getUser();

  let keyword = '';
  export let items = [];

  async function searcItems(keyword) {
    if (!browser) {
      return;
    }
    const response = await client_fetch_json({
      method: 'GET',
      path: '/app/pegawai',
      params: {
        keyword
      }
    })
    items = response.items;
  }

  $: searcItems(keyword);
</script>

<PageHeader>
  <div class="flex flex-col md:flex-row justify-between items-center gap-y-2">
    <h1 class="font-black text-3xl">Daftar Pegawai</h1>
    {#if user.superUser}
    <FButton 
      size="lg"
      path="/app/pegawai/create"
      primary
    >
      tambah pegawai
    </FButton>
    {/if}
  </div>
</PageHeader>

<section class="container">
  <div class="w-full py-6 flex flex-col gap-y-4">
    <div class="px-4 w-full md:w-1/3">
      <FInput
        name="keyword"
        placeholder="Keyword..."
        bind:value={keyword}
      />
    </div>
    {#each items as item}
      <a 
        href={`/app/pegawai/${item.id}/overview`}
        class="px-4 border-b border-gray-200 py-4 flex items-center gap-x-4">
        <img
          class="w-12 h-12 rounded"
          src={`https://i.pravatar.cc/150?img=${item.id}`}
        />
        <div>
          <div class="text-lg font-bold">{item.nama}</div>
          <div class="text-sm">{item.nip}, {item.nik}</div>
        </div>
        <div class="flex-grow"></div>
      </a>
    {/each}
  </div>
</section>
