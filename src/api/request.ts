import { useAccessStore } from '#/store/modules/access';
import { useAuthStore } from '#/store/modules/auth';
import type { RequestClientOptions } from '#/utils/request';
import {
  authenticateResponseInterceptor,
  defaultResponseInterceptor,
  errorMessageResponseInterceptor,
  RequestClient,
} from '#/utils/request';

const apiURL = import.meta.env.VITE_GLOB_API_URL;

export function createRequestClient(baseURL: string, options?: RequestClientOptions) {
  const client = new RequestClient({
    ...options,
    baseURL,
  });

  /** 重新认证逻辑 */
  async function doReAuthenticate() {
    console.warn('访问令牌或刷新令牌无效或已过期。');
    const accessStore = useAccessStore();
    const authStore = useAuthStore();
    accessStore.accessToken = null;
    await authStore.logout();
  }

  /** 刷新token逻辑 */
  async function doRefreshToken() {
    const accessStore = useAccessStore();
    const authStore = useAuthStore();
    const newToken = await authStore.refreshToken();
    accessStore.accessToken = newToken;
    return newToken;
  }

  function formatToken(token: null | string) {
    return token ? `Bearer ${token}` : null;
  }

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async (config) => {
      const accessStore = useAccessStore();
      config.headers.Authorization = formatToken(accessStore.accessToken);
      return config;
    },
  });

  // 处理返回的响应数据格式
  client.addResponseInterceptor(
    defaultResponseInterceptor({
      codeField: 'code',
      dataField: 'data',
      successCode: 0,
    }),
  );

  // token过期的处理
  client.addResponseInterceptor(
    authenticateResponseInterceptor({
      client,
      doReAuthenticate,
      doRefreshToken,
      enableRefreshToken: true,
      formatToken,
    }),
  );

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(
    errorMessageResponseInterceptor((_msg: string, _error) => {
      /**
       * 这里可以根据业务进行定制,你可以拿到 error 内的信息进行定制化处理，根据不同的 code 做不同的提示，
       * 不是直接使用 message.error 提示 msg
       */
      // const responseData = error?.response?.data ?? {};
      // const errorMessage = responseData?.error ?? responseData?.message ?? '';
      // 如果没有错误信息，则会根据状态码进行提示
      // message.error(errorMessage || msg);
    }),
  );

  return client;
}

export const requestClient = createRequestClient(apiURL, {
  responseReturn: 'data',
});

export const baseRequestClient = new RequestClient({ baseURL: apiURL });
