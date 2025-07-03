import { defineStore } from 'pinia';
import { resetAllStores } from '..';

export const useAuthStore = defineStore('auth', () => {
  /** 登录 */
  function authLogin(_params) {}

  /** 刷新token */
  async function refreshToken() {
    const token = '';
    return token;
  }

  /** 退出 */
  async function logout() {
    resetAllStores();
  }

  return {
    authLogin,
    refreshToken,
    logout,
  };
});
