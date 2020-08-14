<template>
  <div class="propuestas">
    <px-modal />
    <px-header />
    <px-main />
  </div>
</template>

<script>
import PxModal from '@/components/PxPropuestas/PxModal';
import PxHeader from '@/components/PxPropuestas/PxHeader';
import PxMain from '@/components/PxPropuestas/PxMain';

export default {
  name: 'Propuestas',
  components: { PxMain, PxHeader, PxModal },
}
</script>