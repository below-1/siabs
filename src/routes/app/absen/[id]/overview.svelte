<script>
  import { getContext } from 'svelte'

  const absen = getContext('absen');
</script>

<div class="flex flex-col gap-y-4">
  <div class="hidden md:flex border-b-2 py-4 items-center">
    <div class="w-1/3 font-bold text-2xl">Pegawai</div>
    <div class="w-1/3 font-bold text-2xl">Jadwal</div>
    <div class="w-1/3 font-bold text-2xl">Absen</div>
  </div>

  <div class="flex flex-wrap gap-y-8 py-4">

    <div class="w-full md:w-1/3 flex flex-col gap-y-4">
      <div class="flex items-center gap-x-4">
        <img 
          src={`https://i.pravatar.cc/150?img=${absen.pegawai.id}`}
          class="rounded border w-12 h-12" 
          alt="gambar"
        />
        <div>
          <a
            href={`/app/pegawai/${absen.jadwal.unitKerja.id}/overview`} 
            class="text-xl font-bold link"
          >{absen.pegawai.nama}</a>
          <div class="font-bold text-gray-600">{absen.pegawai.nip}</div>
        </div>
      </div>
      <div class="flex items-center gap-x-4">
        <img 
          src={`https://i.pravatar.cc/150?img=${absen.jadwal.unitKerja.id + 10}`}
          class="rounded border w-12 h-12" 
          alt="gambar"
        />
        <div>
          <a 
            href={`/app/unit-kerja/${absen.jadwal.unitKerja.id}/detail`} 
            class="text-xl font-bold link"
          >{absen.jadwal.unitKerja.nama}</a>
          <div class="font-bold text-gray-600">{absen.jadwal.unitKerja.alamat}</div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/3 flex flex-col gap-y-4">
      <div>
        <div class="text-sm">Hari Tanggal</div>
        <div class="font-bold text-xl">23 Maret 2022</div>
      </div>

      <div>
        <div class="text-sm">Waktu</div>
        <div class="font-bold text-xl">Pukul 22:00 WIB</div>
      </div>

      <div>
        <div class="text-sm">Tipe Jadwal</div>
        <div class="font-bold text-xl">Jadwal {absen.jadwal.type}</div>
      </div>

      <div>
        <div class="text-sm">ID Jadwal</div>
        <a href={`/app/jadwal/${absen.jadwal.id}/overview`} class="font-bold text-xl link">#{absen.jadwal.id}</a>
      </div>
    </div>
    <div class="w-full md:w-1/3">
      {#if false}
        <div class="py-16 bg-purple-200 rounded flex flex-col items-center justify-center text-center">
          <span class="animate-pulse rounded-full h-12 w-12 bg-yellow-500"></span>
          <div class="text-3xl font-bold text-gray-600">Sedang Menunggu Login</div>
        </div>
      {:else}
        <div class="flex flex-col gap-y-4">
          <div>
            <div class="text-sm">Waktu Login</div>
            <div class="font-bold text-xl">Pukul 22:00 WIB</div>
          </div>
          <div>
            <div class="text-sm">Latitude</div>
            <div class="font-bold text-xl">2.039923029302</div>
          </div>
          <div>
            <div class="text-sm">Longitude</div>
            <div class="font-bold text-xl">2.039923029302</div>
          </div>

          <div>
            <div class="text-sm">Status</div>
            <div class="font-bold text-xl">{absen.workStatus}</div>
          </div>
        </div>
      {/if}
    </div>
  </div>

</div>