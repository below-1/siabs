<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import FField from '$lib/field.svelte'
  import FInput from '$lib/finput.svelte'
  import { client_fetch_json } from '$lib/http'

  export let jadwal;
  let keyword = '';
  let pegawai = null;
  let pegawai_list = [];
  let is_search_pegawai = false;

  async function searchPegawai(keyword) {
    if (!browser) {
      return;
    }
    const resp = await fetch(`/app/absen/free-pegawai?keyword=${keyword}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    const data = await resp.json()
    pegawai_list = data.items;
  }

  $: searchPegawai(keyword);
</script>

<div class="container px-4 py-6">
  <div class="w-full md:w-1/2">
    <h1 class="text-2xl font-bold mb-6">Input Data Absen</h1>
    <form class="flex flex-col gap-y-3">
      <FField label="Jadwal">
        <div>{jadwal.hari}, {jadwal.waktu}</div>
      </FField>

      <FField label="Unit Kerja">
        <div>{jadwal.unitKerja.nama}</div>
      </FField>

      <FField label="Pegawai">
        {#if is_search_pegawai}
          <input 
            class="rounded px-2 py-1 font-semibold text-gray-700 border"
            bind:value={keyword}
            placeholder="cari pegawai..."
          />
          <ul>
            {#each pegawai_list as pegawai}
            <li class="flex items-center gap-x-4">
              <img src={pegawai.avatar} class="rounded border" />
              <div class="text-sm">
                <div class="font-bold">{pegawai.nama}</div>
                <div>{pegawai.nip}</div>
              </div>
            </li>
            {/each}
          </ul>
        {:else}
          <div class="flex justify-between bg-gray-100 rounded">
            <span>Belum ada pegawai</span>
            <button 
              on:click={() => {
                is_search_pegawai = true;
              }}
              type="button">ganti pegawai</button>
          </div>
        {/if}
      </FField>
    </form>
  </div>
</div>
