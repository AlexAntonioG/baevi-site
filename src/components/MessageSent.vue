<template>
  <div class="row" style="width: 100%; margin: 0; margin-top: 1rem;">
    <div class="col-md-9 col-xs-offset-3">
      <div class="d-flex justify-content-start row mb-2 mx-0  flex-row-reverse px-0 flex-nowrap" style="max-width: 100%">
        <div class="arrow-l"></div>
        <div class="border bg-yellow" style="padding-top: 1rem">
          <p class="" style="font-weight: 500; font-size:13px; margin-right: 1rem; margin-left: 1rem; line-height: 16px" >
            {{message.content}}
          </p>
          <h6 class="text-right" style="font-weight: 500; font-size:11px; margin-right: 1rem; color: white; line-height: 3px; margin-left: 1rem" >{{message.date}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageSent",
    props:{
      message:{type: Object, required: true}
    }
  }
</script>

<style scoped>
  .bg-yellow{
    background: #ffb600;
    border-color: #ffb600 !important;
    border-radius: 8px !important;
    color: white;
  }

  .arrow-l {
    margin-top: 10px;
    width: 0;
    height: 0;
    border-left: 10px solid #ffb600;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
</style>
