<template>
  <div class="row" style="width: 100%; margin: 0; margin-top: 1rem; ">
    <div class="col-md-9 col-xs-offset-1">
      <div class="d-flex justify-content-start row mb-2 mx-0  flex-row px-0 flex-nowrap" style="max-width: 100%">
        <div class="arrow-r ml-3"></div>
        <div class=" border bg-white " style="padding-top: 1rem">
          <p class="mb-0" style="font-weight: 500; font-size:13px; margin-right: 1rem; margin-left: 1rem;line-height: 16px" >
            {{message.content}}
          </p>
          <h6 class="" style="font-weight: 500; font-size:11px; margin-left: 1rem; line-height: 3px; margin-right: 1rem;">{{message.date}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageReceived",
    props:{
      message:{type: Object, required: true}
    }
  }
</script>

<style scoped>

  .bg-white {
    background: #dfdfdf;
    border-color: #dfdfdf !important;
    border-radius: 8px !important;
  }

  .arrow-r {
    margin-top: 10px;
    width: 0;
    height: 0;
    border-right: 10px solid #dfdfdf;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  .texto-gris {
    color: #4B515D;
  }
</style>
