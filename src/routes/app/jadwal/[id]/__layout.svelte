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

  import FButton from '$lib/fbutton.svelte'

  export let jadwal;
  setContext('jadwal', jadwal)
  $: hari_formatted = dayjs(jadwal.hari).format('dddd, DD MMMM, YYYY')
  $: waktu_formatted = dayjs(jadwal.waktu).format('HH:mm')

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

<section class='section border-b border-gray-200 py-8'>
  <div class="container flex flex-col gap-y-3 items-center md:items-start justify-center text-gray-500 font-mono px-2 md:px-none">
    <div class="font-bold text-gray-800 text-xl">{waktu_formatted}. {hari_formatted}</div>
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
  </div>  
</section>

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
