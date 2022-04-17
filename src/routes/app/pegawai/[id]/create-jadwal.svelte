<script>
  import { getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'
  import Field from '$lib/field.svelte'
  import FInput from '$lib/finput.svelte'
  import FDate from '$lib/fdate.svelte'
  import FSelect from '$lib/fselect.svelte'
  import FTime from '$lib/ftime.svelte'

  const pegawai = getContext('pegawai');
</script>

<section class='section'>
  <div class="container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8">

    <div class="col-span-12 md:col-span-5 flex flex-col">
      <h1 class="text-2xl font-bold text-gray-500 mb-8">Tambah Jadwal {pegawai.nama}</h1>
      <form class="flex flex-col gap-y-4">
        <Field label="Hari">
          <FDate
            name="hari"
          />
        </Field>
        <Field label="Waktu">
          <FTime
            name="waktu"
          />
        </Field>
        <Field label="Status Kerja">
          <FSelect
            name="status"
            options={[
              { text: 'Work From Office', value: 'WFO' },
              { text: 'Work From Home', value: 'WFH' },
              { text: 'Dinas Luar', value: 'DINAS_LUAR' }
            ]}
          />
        </Field>
        <Field label="Lokasi Kerja">
          <FSelect
            name="lokasi"
            options={[
              { text: 'Work From Office', value: 'WFO' },
              { text: 'Work From Home', value: 'WFH' },
              { text: 'Dinas Luar', value: 'DINAS_LUAR' }
            ]}
          />
        </Field>
      </form>
    </div>


  </div>
</section>