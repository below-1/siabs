<script>
  export let error = false;
  export let on_next = () => {};
</script>

<form class="card" on:submit|preventDefault={on_next}>
  <div class="card-header">
    <p class="card-header-title">
      <span>Form Pendaftaran -- </span>
      <slot name="title"></slot>
    </p>
  </div>
  <div class="card-content">
    <slot name="content"></slot>
  </div>
  <div class="card-footer">
    <p class="card-footer-item">
      <button 
        class="button is-primary"
        disabled={error}
        type="submit"
      >
        selanjutnya
      </button>
    </p>
    <p class="card-footer-item">
      <span>
        Sudah punya akun? <a href="/auth/signin" >masuk</a>
      </span>
    </p>
  </div>
</form>