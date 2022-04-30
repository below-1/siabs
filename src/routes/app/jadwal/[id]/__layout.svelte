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

  const menus = [
    { label: 'overview', path: `/app/jadwal/${jadwal.id}/overview` },
    { label: 'modify', path: `/app/jadwal/${jadwal.id}/jadwal` },
    { label: 'hapus', path: `/app/jadwal/${jadwal.id}/hapus` }
  ]
</script>

<section class='section border-b border-gray-200 py-4'>
  <div class="container flex flex-col items-center md:items-start justify-center text-gray-500">
    <img class="h-32 md:hidden rounded-full" src="https://i.pravatar.cc/150?img=${jadwal.id}" />
    <div class="font-bold text-gray-800 text-2xl">{waktu_formatted}. {hari_formatted}</div>
    <div class="text-lg font-bold"></div>
  </div>  
</section>