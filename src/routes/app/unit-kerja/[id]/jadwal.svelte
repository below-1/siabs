<script>
  import PageHeader from '$lib/page-header.svelte'
  import { date } from '$lib/format/jadwal'

  export let items = []
  $: formatted_items = items.map(date)
</script>

<div class="container py-6 px-4">
  <ul class="flex flex-col">
    {#each formatted_items as item}
      <li>
        <a href={`/app/jadwal/${item.id}/overview`} 
          class="flex items-center border-b py-4 gap-x-4"
        >
          {#if (item.status == 'Draft')}
            <div class="rounded-full h-4 w-4 bg-yellow-400"></div>
          {:else if (item.status == 'Published')}
            <div class="rounded-full h-4 w-4 bg-green-400"></div>
          {/if}
          <div class="flex-grow text-sm">
            <div class="font-bold text-lg">{item.display.hari}, {item.display.waktu}</div>
            <div>
              <span
                class="mr-2"
              >{item.unitKerja.nama}</span>
              <span>Jadwal {item.type}</span>
            </div>
          </div>
          <div class="px-4">
            {item._count.absen} pegawai
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>