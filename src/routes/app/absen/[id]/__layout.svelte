<script context="module">
  export async function load({ params, session, fetch }) {
    const response = await fetch(`/app/absen/${params.id}/layout-data`, {
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

  export let absen;

  setContext('absen', absen);
</script>

<PageHeader>
  <h1 class="text-2xl font-bold">Detail Absensi #{absen.id}</h1>
</PageHeader>

<div class="container px-4">
  <slot></slot>
</div>
