<script>
  import { getContext } from 'svelte'

  const jadwal = getContext('jadwal');
  export let total_member = 0;
</script>

<div class="container px-4 flex py-6">
  <div class="w-full md:w-1/3">

    <div class="flex flex-col border">
      <div class="text-base  flex items-center justify-between p-3 border-b">
        <div>Hari Tanggal</div>
        <div>{jadwal.display.hari}</div>
      </div>

      <div class="text-base  flex items-center justify-between p-3 border-b">
        <div>Waktu</div>
        <div>{jadwal.display.waktu}</div>
      </div>

      <div class="text-base  flex items-center justify-between p-3 border-b">
        <div>Unit Kerja</div>
        <a
          href={`/app/unit-kerja/${jadwal.unitKerja.id}/detail`}
          class="link"
        >{jadwal.unitKerja.nama}</a>
      </div>

      <div class="text-base flex items-center justify-between p-3 border-b">
        <div>Status</div>
        <div>{jadwal.status}</div>
      </div>

      <div class="text-base  flex items-center justify-between p-3 border-b">
        <div>Tipe Jadwal</div>
        <div>Jadwal {jadwal.type}</div>
      </div>

      <div class="text-base  flex items-center justify-between p-3 border-b">
        <div>Total Pegawai</div>
        <div>{total_member}</div>
      </div>
    </div>

  </div>
</div>