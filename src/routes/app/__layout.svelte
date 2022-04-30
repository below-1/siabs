<script>
  import { setContext } from 'svelte'
  import { session, page } from '$app/stores'
  import AppMenu from './_menu.svelte'

  $: user = $session.user;
  setContext('currentUser', {
    getUser: () => user
  });

  let showMobileMenu = false;
  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }

  function isActive(path) {
    const current_path_pattern = '/' + $page.routeId
    if (current_path_pattern.startsWith('/app/unit-kerja')) {
      return true;
    } else if (current_path_pattern.startsWith('/app/pegawai')) {
      return true;
    } else if (current_path_pattern.startsWith('/app/jadwal')) {
      return true;
    } else if (current_path_pattern.startsWith('/app/tugas')) {
      return true;
    } else {
      return false;
    }
  }

  function _menus(sess, page) {
    const current_path_pattern = '/' + page.routeId
    let result = []
    if (sess.user.superUser) {
      result = [
        { path: '/app/unit-kerja', label: 'unit kerja' },
        { path: '/app/pegawai', label: 'pegawai' },
        { path: '/app/jadwal', label: 'jadwal' },
        { path: '/app/tugas', label: 'tugas' }
      ]
    } else if (sess.user.pegawai.isAdminUnitKerja) {
      result = [
        { path: '/app/unit-kerja', label: 'unit kerja' },
        { path: '/app/pegawai', label: 'pegawai' },
        { path: '/app/jadwal', label: 'jadwal' },
        { path: '/app/tugas', label: 'tugas' }
      ]
    } else {
      result = [
        { path: '/app/jadwal', label: 'jadwal' },
        { path: '/app/tugas', label: 'tugas' }
      ]
    }

    result = result.map(r => {
      if (current_path_pattern.startsWith(r.path)) {
        return {
          ...r,
          active: true
        }
      }
      return r
    })

    return result;
  }

  $: menus = _menus($session, $page)
</script>

<div class="flex flex-col">
  <nav class="bg-black text-white">
    <div class="container flex">
      <div class="px-4 md:px-none flex py-3" href="/app">
        <div class="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500">
        </div>
        <div class="w-0.5 h-8 bg-gray-600 mx-4"></div>
        <img 
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" 
          alt="logo" 
          class="w-8 h8 mr-1 rounded-full"
        />
        <div>
          <div class="font-black text-lg" style="line-height: 1;">{$session.user.username}</div>

          {#if $session.user.superUser}
          <div class="text-sm text-gray-600">Super Admin</div>
          {:else}
          <div class="text-sm text-gray-600">Pegawai</div>
          {/if}
        </div>
      </div>

      <div class="flex-grow">
      </div>

      <div class="hidden md:flex gap-x-6 text-gray-400 font-bold text-sm">
        <a
          target="_blank"
          href="/app"
          class="gap-x-2 flex items-center px-4 py-2 hover:bg-gray-100 hover:text-gray-700"
        >
          <ion-icon name="notifications-outline"></ion-icon>
          <span>
            Pesan
          </span>
        </a>

        <a class="gap-x-2 flex items-center" href="/app">
          <ion-icon name="person-outline"></ion-icon>
          <span>Account</span>
        </a>
      </div>

      <div class="md:hidden flex items-center">
        <ion-icon 
          on:click={toggleMobileMenu}
          class="w-8 h-8 px-4 text-gray-500 hover:text-gray-100 active:text-white" 
          name="menu-outline"></ion-icon>
      </div>
    </div>

    {#if showMobileMenu}
      <div class="flex flex-col text-gray-400 font-bold text-xl">
        <a
          target="_blank"
          href="/app"
          class="gap-x-2 flex items-center justify-end px-8 py-2 hover:bg-gray-100 hover:text-gray-700"
        >
          <ion-icon name="notifications-outline"></ion-icon>
          <span>
            Pesan
          </span>
        </a>

        <a
          target="_blank"
          href="/app"
          class="gap-x-2 flex items-center justify-end px-8 py-2 hover:bg-gray-100 hover:text-gray-700"
        >
          <ion-icon name="person-outline"></ion-icon>
          <span>
            Akun
          </span>
        </a>

      </div>
    {/if}
  </nav>

  <nav class="border-b border-gray-200 bg-gray-50">
    <div class="container flex overflow-x-scroll md:overflow-hidden">
      {#each menus as menu, i}
        <a
          href={menu.path}
          class="py-3 px-4 hover:bg-gray-50 border-black whitespace-nowrap"
          class:text-black={menu.active}
          class:font-black={menu.active}
          class:border-b-2={menu.active}
        >
          {menu.label}
        </a>
      {/each}
    </div>
  </nav>

  <div class="flex-grow">
    <slot></slot>
  </div>

  <footer class="border-t border-gray-200 flex justify-center items-center h-12 bg-gray-100">
    <div class="text-sm font-bold text-gray-400">Copyright Jordan Meta</div>
  </footer>
</div>