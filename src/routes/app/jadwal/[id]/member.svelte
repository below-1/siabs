<script>
  import { getContext } from 'svelte'
  import { browser } from '$app/env'

  import FButton from '$lib/fbutton.svelte'
  import FInput from '$lib/finput.svelte'
  import { status } from '$lib/format/absen'
  import { client_fetch_json } from '$lib/http'

  const jadwal = getContext('jadwal');

  export let members;
  let keyword = '';

  $: formatted = members.map(it => ({
    ...it,
    display: {
      workStatus: status(it.workStatus)
    }
  }))

  async function loadMembers(keyword) {
    if (!browser) {
      return;
    }
    const resp = await client_fetch_json({
      method: 'GET',
      path: `/app/jadwal/${jadwal.id}/member`,
      params: {
        keyword
      }
    })
    members = resp.members
  }

  $: loadMembers(keyword);
</script>

<div class="container px-4 flex flex-col py-6">
  <div class="w-full">
    <div class="flex items-center mb-6 gap-x-2">
      <h1 class="flex-grow text-xl font-bold text-gray-600">Daftar Pegawai</h1>

      <input 
        class="rounded px-2 py-1 font-semibold text-gray-700 border-2 disabled:bg-gray-100 disabled:opacity-75"
        placeholder="keyword.." 
        bind:value={keyword}
      />
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