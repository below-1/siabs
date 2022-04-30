<script>
  import { getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'

  const pegawai = getContext('pegawai');
  export let items = [];
</script>

<section class='section'>
  <div class="container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8">

    <div class="col-span-12 md:col-span-8">

      <div class="flex justify-between mb-4">
        <h1 class="text-xl font-bold text-gray-500">Jadwal Pegawai {pegawai.nama}</h1>
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
        <ul>
          {#each items as item}
            <li>
              <div>{item.hari}, {item.waktu}</div>
            </li>
          {/each}
        </ul>
      {/if}
    </div>


  </div>
</section>