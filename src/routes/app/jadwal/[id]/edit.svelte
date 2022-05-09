<script>
  import { getContext } from 'svelte'
  import day from '$lib/day'

  import FButton from '$lib/fbutton.svelte'
  import Field from '$lib/field.svelte'
  import FDate from '$lib/fdate.svelte'
  import FTime from '$lib/ftime.svelte'
  import Finput from '$lib/finput.svelte'
  import FSelect from '$lib/fselect.svelte'
  import AbsenTypeSelect from '$lib/absen-type-select.svelte'

  let jadwal = getContext('jadwal')

  export let unitKerjaList = [];
  $: unitKerjaOptions = unitKerjaList.map(uk => ({
    text: uk.nama,
    value: uk.id
  }))

  let payload = {
    ...jadwal,
    hari: day(jadwal.hari).format('YYYY-MM-DD'),
    waktu: day(jadwal.waktu).format('HH:mm')
  }
</script>

<div class="container px-4 flex py-6">
  <div class="w-full md:w-1/2">
    <form 
      class="flex flex-col gap-y-4" 
      method="post" 
      enctype="multipart/form-data"
    >
      <Field label="Tanggal">
        <FDate name="hari" bind:value={payload.hari} />
      </Field>
      <Field label="Waktu">
        <FTime name="waktu" bind:value={payload.waktu} />
      </Field>
      <Field label="Pilih Unit Kerja">
        <FSelect
          name="unitKerja"
          options={unitKerjaOptions}
          bind:selected={payload.unitKerja.id}
        />
      </Field>
      <Field label="Pilih Tipe Absen">
        <AbsenTypeSelect
          name="type"
          bind:selected={jadwal.type}
        />
      </Field>
      <FButton 
        primary={true}
        size="lg"
      >
        simpan data
      </FButton>
    </form>
  </div>
</div>