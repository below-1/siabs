<script>
  import { getContext } from 'svelte'
  import FButton from '$lib/fbutton.svelte'
  import Field from '$lib/field.svelte'
  import FInput from '$lib/finput.svelte'
  import FDate from '$lib/fdate.svelte'
  import FSelect from '$lib/fselect.svelte'
  import FTime from '$lib/ftime.svelte'

  export let unitKerjaOptions = [];
  const pegawai = getContext('pegawai');

  let status = 'WFO';
  $: status_dinas_luar = status == 'DINAS_LUAR';

  $: {
    console.log(status);
  }
</script>

<section class='section'>
  <div class="container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8">

    <div class="col-span-12 md:col-span-5 flex flex-col">
      <h1 class="text-2xl font-bold text-gray-500 mb-8">Tambah Jadwal {pegawai.nama}</h1>
      <form 
        method="post" 
        enctype="multipart/form-data" 
        class="flex flex-col gap-y-4"
      >
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
            bind:selected={status}
            options={[
              { text: 'Work From Office', value: 'WorkFromHome' },
              { text: 'Work From Home', value: 'WorkFromOffice' },
              { text: 'Dinas Luar', value: 'DinasLuar' }
            ]}
          />
        </Field>

        {#if status_dinas_luar}
          <Field label="Nama Lokasi Dinas Luar">
            <FInput name="dl_nama" />
          </Field>
          <Field label="Latitude Lokasi">
            <FInput name="latitude" />
          </Field>
          <Field label="Longitude Lokasi">
            <FInput name="longitude" />
          </Field>
        {:else}
          <Field label="Unit Kerja">
            <FSelect
              name="unitKerjaId"
              options={unitKerjaOptions}
            />
          </Field>
        {/if}

        <FButton primary>simpan data</FButton>
      </form>
    </div>


  </div>
</section>