<script context="module">
  import { browser } from '$app/env';
  import { page } from '$app/stores';

  export async function load({ params, session, fetch }) {
    const response = await fetch(`/app/unit-kerja/${params.id}/layout-data`, {
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

  import PageHeader from '$lib/page-header.svelte'
  import FButton from '$lib/fbutton.svelte'
  import Submenus from '$lib/submenus.svelte'

  export let unitKerja = {};
  setContext('unitKerja', unitKerja);

  const submenus = [
    { label: 'overview', path: `/app/unit-kerja/${unitKerja.id}/overview` },
    { label: 'jadwal', path: `/app/unit-kerja/${unitKerja.id}/jadwal` }
  ]
</script>

<PageHeader>
  <div class="flex flex-col md:flex-row items-center gap-y-2 gap-x-4">
    <img class="hidden md:block h-20 rounded" src={unitKerja.avatar} />
    <div class="flex-grow">
      <h1 class="font-black text-3xl">{unitKerja.nama}</h1>
      <h2 class="text-sm">{unitKerja.alamat}</h2>
    </div>
    <FButton 
      path="/app/unit-kerja/"
      danger
    >
      Hapus Data
    </FButton>
  </div>
</PageHeader>

<Submenus
  menus={submenus}
>
</Submenus>

<slot></slot>