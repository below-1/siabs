<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import PageHeader from '$lib/page-header.svelte'
  import FField from '$lib/field.svelte'
  import FInput from '$lib/finput.svelte'
  import FButton from '$lib/fbutton.svelte'
  import FSelect from '$lib/fselect.svelte'
  import WorkStatusSelect from '$lib/work-status-select.svelte'

  import { client_fetch_json } from '$lib/http'
  import { date } from '$lib/format/jadwal'
  import { required, min_length, max_length, useValidation } from '$lib/validation'

  export let jadwal;
  let keyword = '';
  let pegawai = null;
  let pegawai_list = [];
  let is_search_pegawai = false;

  let workStatus = null;
  let type = null;

  $: payload = ({
    pegawaiId: pegawai ? pegawai.id : null,
    jadwalId: jadwal.id,
    type,
    workStatus,
  });

  $: verr = useValidation({
    pegawaiId: [
      required('pegawai harus diisi'),
    ],
    workStatus: [
      required('Status Kerja harus diisi'),
    ],
  }, payload);

  $: formatted = date(jadwal).formatted;
  $: ftstamp = `${formatted.hari} ${formatted.waktu}`;

  async function searchPegawai(keyword) {
    if (!browser) {
      return;
    }
    const resp = await fetch(`/app/absen/free-pegawai?keyword=${keyword}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    const data = await resp.json()
    pegawai_list = data.items;
  }

  $: searchPegawai(keyword);

  async function on_submit() {
    const resp_data = await client_fetch_json({
      method: 'POST',
      payload,
      path: ''
    })
    console.log(resp_data)
  }
</script>

<PageHeader>
  <h1 class="font-black text-3xl">Input Data Absen</h1>
</PageHeader>

<div class="container px-4 py-6">
  <div class="w-full md:w-1/2">
    <form class="flex flex-col gap-y-4" on:submit|preventDefault={on_submit}>
      <FField label="Jadwal">
        <FInput
          disabled
          value={ftstamp}
        />
      </FField>

      <FField label="Unit Kerja">
        <FInput
          disabled
          value={jadwal.unitKerja.nama}
        />
      </FField>

      <FField label="Pegawai">
        {#if !payload.pegawaiId}
          <div class="text-red-500  text-sm">{verr.fields.pegawaiId}</div>
        {/if}
        {#if is_search_pegawai}
          <FInput
            bind:value={keyword}
          />
          <ul class="flex flex-col gap-y-4 border p-4 rounded">
            {#each pegawai_list as item}
            <li 
              class="flex items-center gap-x-4"
              on:click={() => {
                pegawai = item;
                is_search_pegawai = false;
              }}
            >
              <img 
                src={`https://i.pravatar.cc/150?img=${item.id}`}
                class="rounded border w-10 h-10" 
              />
              <div class="text-sm">
                <div class="font-bold">{item.nama}</div>
                <div>{item.nip}</div>
              </div>
            </li>
            {/each}
          </ul>
        {:else}
          <div class="flex border p-2 gap-x-4 rounded">
            {#if (!pegawai)}
              <span class="flex-grow px-4 py-1 bg-gray-100 text-gray-600 font-bold">
                Belum ada pegawai
              </span>
            {:else}
              <li 
                class="flex items-center gap-x-4 flex-grow"
              >
                <img 
                  src={`https://i.pravatar.cc/150?img=${pegawai.id}`}
                  class="rounded border w-10 h-10" 
                />
                <div class="text-sm">
                  <div class="font-bold">{pegawai.nama}</div>
                  <div>{pegawai.nip}</div>
                </div>
              </li>
            {/if}
            <FButton
              on:click={() => {
                is_search_pegawai = true;
              }}
              outline
            >
              Ganti Pegawai
            </FButton>
          </div>
        {/if}
      </FField>

      <FField label="Status">
        <WorkStatusSelect
          name="workStatus"
          bind:selected={workStatus}
          error={verr.fields.workStatus}
        />
      </FField>
      <FButton disabled={!verr.valid} primary>Simpan</FButton>
    </form>
  </div>
</div>
