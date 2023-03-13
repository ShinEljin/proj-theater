<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="fixed top-0 bg-[#0000007f] w-full h-full flex justify-center items-center"
        @click.self="clickableOutside && $emit('close-modal')"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="w-[90%] max-w-md p-5 bg-white rounded-lg flex flex-col justify-center items-center"
          >
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits(["close-modal"]);

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
  clickableOutside: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
