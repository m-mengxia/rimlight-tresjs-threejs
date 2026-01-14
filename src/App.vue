<template>
  <TresCanvas>
    <TresMesh>
      <TresSphereGeometry />
      <TresShaderMaterial v-bind="shader" />
    </TresMesh>

    <TresPerspectiveCamera :position="[0, 0, 15]" />

    <OrbitControls />
  </TresCanvas>
</template>

<script setup>
import { OrbitControls } from '@tresjs/cientos';
import { Color } from 'three';

import vertexShader from './shader/vertex.glsl';
import fragmentShader from './shader/fragment.glsl';

const shader = {
  vertexShader,
  fragmentShader,
  uniforms: {
    rimColor: {
      value: new Color(0x00ffff),
    },
    rimPower: {
      value: 3.0,
    },
    rimIntensity: {
      value: 1.5,
    },
  },
};
</script>
