import type { Pinia } from 'pinia';
import { createPinia } from 'pinia';
import type { App } from 'vue';

let pinia: Pinia;

export async function setupStore(app: App) {
  const { createPersistedState } = await import('pinia-plugin-persistedstate');
  pinia = createPinia();
  pinia.use(
    createPersistedState({
      key: (storeKey) => `${storeKey}`,
      storage: localStorage,
    }),
  );
  app.use(pinia);
  return pinia;
}

export function resetAllStores() {
  if (!pinia) {
    console.error('Pinia is not installed');
    return;
  }
  const allStores = (pinia as any)._s;
  for (const [_key, store] of allStores) {
    store.$reset();
  }
}
