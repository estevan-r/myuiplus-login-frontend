<script>
  export let showModal2;
  let dialog;
  $: if (dialog && showModal2) dialog.showModal();
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:keydown
  on:close={() => (showModal2 = false)}
  on:click|self={() => dialog.close()}
  class="modal"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click|stopPropagation class="modal-box w-11/12 max-w-5xl">
    <slot name="header" />
    <slot />
    <div class="modal-action">
      <!-- svelte-ignore a11y-autofocus -->
      <button
        type="button"
        autofocus
        on:keydown
        on:click={() => dialog.close()}
        class="btn">Close</button
      >
    </div>
  </div>
</dialog>
