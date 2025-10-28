<script setup lang="tsx">
import { Select, Space } from 'antd-v';
import { ref } from 'vue';

const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

type CityName = keyof typeof cityData;

const provinceData: CityName[] = ['Zhejiang', 'Jiangsu'];

const cities = ref(cityData[provinceData[0] as CityName]);
const secondCity = ref(cityData[provinceData[0]][0] as CityName);

const handleProvinceChange = (value: CityName) => {
  cities.value = cityData[value];
  secondCity.value = cityData[value][0] as CityName;
};
</script>

<template>
  <Space wrap>
    <Select
      :value="provinceData[0]"
      style="width: 120px"
      @change="handleProvinceChange"
      :options="provinceData.map((province) => ({ label: province, value: province }))"
    />
    <Select style="width: 120px" v-model:value="secondCity" :options="cities.map((city) => ({ label: city, value: city }))" />
  </Space>
</template>
