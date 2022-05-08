<script>
  import { getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'
  import { status } from '$lib/format/absen'

  const jadwal = getContext('jadwal');

  export let members;

  $: formatted = members.map(it => ({
    ...it,
    display: {
      workStatus: status(it.workStatus)
    }
  }))
</script>

<div class="container px-4 flex flex-col py-6">
  <div class="w-full">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-xl font-bold text-gray-600">Daftar Pegawai</h1>
      <FButton
        path={`/app/absen/create?jadwal=${jadwal.id}`}
        primary
      >
        Tambah Pegawai
      </FButton>
    </div>

    <ul>
      {#each formatted as member}
        <a 
          class="flex items-center gap-x-3 border-b py-4"
          href={`/app/absen/${member.id}/overview`}
        >
          <img 
            src={`https://i.pravatar.cc/150?img=${member.pegawai.id}`}
            class="rounded border w-12 h-12" 
          />
          <div class="flex-grow">
            <div class="md:flex md:gap-x-3">
              <div class="font-bold">{member.pegawai.nama}</div>
              <div class="font-bold">{member.pegawai.nip}</div>
            </div>
            <div class="text-xs uppercase">Status: {member.display.workStatus}</div>
          </div>
          {#if !member.waktu}
            <div class="rounded-full h-4 w-4 bg-yellow-500"></div>
            <div class="italic text-xs">Menunggu Login</div>
          {:else}
            <div class="rounded-full h-4 w-4 bg-green-500"></div>
            <div class="italic text-xs">Telah Absen</div>
          {/if}
        </a>
      {/each}
    </ul>
  </div>
  
</div>