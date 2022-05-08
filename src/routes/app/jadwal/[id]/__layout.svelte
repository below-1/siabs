<script context="module">
  import { browser } from '$app/env';
  import { page } from '$app/stores';

  export async function load({ params, session, fetch }) {
    const response = await fetch(`/app/jadwal/${params.id}/layout-data`, {
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

  import dayjs from '$lib/day'

  import PageHeader from '$lib/page-header.svelte'
  import FButton from '$lib/fbutton.svelte'

  import { date } from '$lib/format/jadwal'

  export let jadwal;
  const formatted_jadwal = date(jadwal);
  setContext('jadwal', formatted_jadwal);

  $: jadwal_infos = [
    { label: 'Status Jadwal', value: jadwal.status },
    { label: 'Total Pegawai', value: 13 },
    { label: 'Unit Kerja', value: jadwal.unitKerja.nama }
  ]

  const menus = [
    { label: 'overview', path: `/app/jadwal/${jadwal.id}/overview` },
    { label: 'modify', path: `/app/jadwal/${jadwal.id}/jadwal` },
    { label: 'member', path: `/app/jadwal/${jadwal.id}/member` },
    { label: 'hapus', path: `/app/jadwal/${jadwal.id}/hapus` }
  ]
</script>

<PageHeader>

  <div class="md:flex md:items-center md:justify-between">
    <div class="mb-4 md:mb-0 md:flex md:items-center md:gap-x-4">
      <h1 class="text-2xl font-bold">{formatted_jadwal.formatted.hari}</h1>
      <h1 class="text-2xl font-bold">{formatted_jadwal.formatted.waktu}</h1>
    </div>
    <FButton primary>Publish Jadwal</FButton>
  </div>

  <div class="flex flex-wrap gap-y-3 gap-x-1">
    {#each jadwal_infos as ji}
      <div class="whitespace-nowrap flex items-center bg-gray-100 text-gray-600 rounded text-sm">
        <span class="flex-grow px-2 py-1">
          {ji.label}:
        </span>
        <span class="px-2 font-bold">
          {ji.value}
        </span>
      </div>
    {/each}
  </div>
</PageHeader>

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

<slot></slot>
