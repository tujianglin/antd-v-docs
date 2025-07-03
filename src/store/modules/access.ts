import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref } from 'vue';

export const useAccessStore = defineStore(
  'core-access',
  () => {
    /** 请求token */
    const accessToken = ref('');
    /** 刷新token */
    const refreshToken = ref(null);
    /** 入口是否确认 */
    const isAccessChecked = ref(false);

    return {
      accessToken,
      refreshToken,
      isAccessChecked,
    };
  },
  {
    persist: {
      pick: ['accessToken', 'refreshToken'],
    },
  },
);

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useAccessStore, hot));
}
