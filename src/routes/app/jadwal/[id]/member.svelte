<script>
  import { getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'

  const jadwal = getContext('jadwal');

  export let members;
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
      {#each members as member}
        <li class="flex items-center gap-x-4 border-b py-4">
          <img 
            src={`https://i.pravatar.cc/150?img=${member.pegawai.id}`}
            class="rounded border w-12 h-12" 
          />
          <div>
            <div class="text-xl">{member.pegawai.nama}</div>
            <div class="text-sm text-gray-600">{member.pegawai.nip}</div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  
</div>