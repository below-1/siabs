<script>
  import { getContext } from 'svelte'

  const jadwal = getContext('jadwal');
</script>

<div class="container px-4">
  <div>
    <h1>Daftar Pegawai</h1>
    <a href={`/app/absen/create?jadwal=${jadwal.id}`}>Tambah Pegawai</a>
  </div>
</div>