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
  <div class="w-full md:w-2/3">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-xl">Daftar Pegawai</h1>
      <FButton
        path={`/app/absen/create?jadwal=${jadwal.id}`}
        primary
      >
        Tambah Pegawai
      </FButton>
    </div>

    <ul>
      {#each formatted as member}
        <li class="flex items-center gap-x-3 border-b py-3">
          <img 
            src={`https://i.pravatar.cc/150?img=${member.pegawai.id}`}
            class="rounded border w-10 h-10" 
          />
          <div>
            <div class="font-bold">{member.pegawai.nama}</div>
            <div class="flex items-center gap-x-4">
              <div class="bg-gray-200 rounded px-0.5 py-0.5 text-sm">Status: {member.display.workStatus}</div>
              <div class="text-sm text-gray-800">{member.pegawai.nip}</div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  
</div>