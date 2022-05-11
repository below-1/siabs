<script>
  import { onMount, getContext } from 'svelte'
  import { browser } from '$app/env'
  import PageHeader from '$lib/page-header.svelte'
  import { client_fetch_json } from '$lib/http'

  const cu = getContext('currentUser')
  const currentUser = cu.getUser()
  let netStatus = 'loading'
  let checkOutResult = null;

  onMount(() => {
    if (!browser || currentUser.superUser) {
      return
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude
      const waktu = new Date()

      try {
        const resp = await client_fetch_json({
          path: '/app/jadwal/checkout-latest',
          method: 'POST',
          payload: {
            latitude,
            longitude,
            waktu,
            pegawaiId: currentUser.pegawai.id
          }
        })
        netStatus = 'success'
        if (resp.result.count > 0) {
          checkOutResult = 'success'
        } else {
          checkOutResult = 'none'
        }
      } catch (err) {
        netStatus = 'error'
      } finally {
        setTimeout(() => {
          window.location = `/app/pegawai/${currentUser.pegawai.id}/overview`
        }, 3000)
      }
    })
  })
</script>

<PageHeader>
  <h1 class="text-2xl font-bold">
    {#if netStatus == 'loading'}
    Checking Absensi...
    {:else}
    Status Absensi
    {/if}
  </h1>
</PageHeader>

<section class="container">
  <div class="w-full py-6 flex flex-col justify-center items-center gap-y-4">
    {#if netStatus == 'loading'}
      <div class="h-32 w-32 bg-purple-500 rounded-full animate-pulse"></div>
    {:else if netStatus == 'success'}
      {#if checkOutResult == 'success'}
        <div class="h-32 w-32 bg-green-500 rounded-full animate-pulse"></div>
        <div class="text-xl font-bold">Sukses mengubah data absen</div>
      {:else}
        <div class="h-32 w-32 bg-yellow-600 rounded-full animate-pulse"></div>
        <div class="text-xl font-bold">Tidak ada data absen untuk saat ini</div>
      {/if}
    {/if}
  </div>
</section>