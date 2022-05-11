<script>
  import { getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'
  import { date as format_jadwal_date } from '$lib/format/jadwal'

  const pegawai = getContext('pegawai');
  export let items = [];
  $: formatted = items.map(it => {
    return {
      ...it,
      jadwal: format_jadwal_date(it.jadwal)
    }
  })
</script>

<section class='section'>
  <div class="container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8">

    <div class="col-span-12">
      <div class="flex flex-col md:flex-row justify-between mb-4 gap-y-2">
        <h1 class="text-xl font-bold text-gray-500 text-center md:text-left ">Jadwal Pegawai {pegawai.nama}</h1>
        <FButton 
          primary
          path={`/app/pegawai/${pegawai.id}/create-jadwal`}
        >
          Tambah Jadwal
        </FButton>
      </div>

      {#if (items.length == 0)}
        <div>
          Data Jadwal Masih Kosong
        </div>
      {:else}
        <div>
          {#each formatted as item}
            <a 
              href={`/app/absen/${item.id}/overview`}
              class="flex items-center gap-x-4 border-b py-2"
            >
              {#if (item.jadwal.status == 'Draft')}
                <div class="rounded-full h-4 w-4 bg-yellow-400"></div>
              {:else if (item.jadwal.status == 'Published')}
                <div class="rounded-full h-4 w-4 bg-green-400"></div>
              {/if}
              <div class="flex-grow">
                <div class="font-bold text-lg">{item.jadwal.display.hari}, {item.jadwal.display.waktu}</div>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold whitespace-nowrap text-gray-700">
                  <span class="bg-gray-100 p-0.5 rounded">{item.jadwal.unitKerja.nama}</span>
                  <span class="bg-gray-100 p-0.5 rounded">Jadwal {item.jadwal.type}</span>
                  <span class="bg-gray-100 p-0.5 rounded">Status: {item.workStatus}</span>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </div>


  </div>
</section>