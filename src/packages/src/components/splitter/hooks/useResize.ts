import { computed, ref, type ComputedRef, type Ref } from 'vue';
import type { PanelProps } from '../interface';
import { getPtg } from './useSizes';

export type ItemType = Omit<PanelProps, 'collapsible'> & {
  collapsible: {
    start?: boolean;
    end?: boolean;
  };
};

export type ResizableInfo = {
  resizable: boolean;
  startCollapsible: boolean;
  endCollapsible: boolean;
};

export default function useResize(
  items: ItemType[],
  resizableInfos: Ref<ResizableInfo[]>,
  percentSizes: ComputedRef<number[]>,
  containerSize: Ref<number | undefined>,
  innerSizes: Ref<(number | string)[]>,
) {
  const limitSizes = items.map((item) => [item.min, item.max]);
  const mergedContainerSize = computed(() => containerSize.value || 0);
  const ptg2px = (ptg: number) => ptg * mergedContainerSize.value;

  function getLimitSize(str: string | number | undefined, defaultLimit: number) {
    if (typeof str === 'string') {
      return ptg2px(getPtg(str));
    }
    return str ?? defaultLimit;
  }

  const cacheSizes = ref<number[]>([]);
  const cacheCollapsedSize = ref<number[]>([]);

  const movingIndex = ref<{ index: number; confirmed: boolean } | null>(null);

  const getPxSizes = () => percentSizes.value.map(ptg2px);

  const onOffsetStart = (index: number) => {
    cacheSizes.value = getPxSizes();
    movingIndex.value = {
      index,
      confirmed: false,
    };
  };

  const onOffsetUpdate = (index: number, offset: number) => {
    // First time trigger move index update is not sync in the state
    let confirmedIndex: number | null = null;

    // We need to know what the real index is.
    if ((!movingIndex.value || !movingIndex.value.confirmed) && offset !== 0) {
      // Search for the real index
      if (offset > 0) {
        confirmedIndex = index;
        movingIndex.value = {
          index,
          confirmed: true,
        };
      } else {
        for (let i = index; i >= 0; i -= 1) {
          if (cacheSizes[i] > 0 && resizableInfos.value[i].resizable) {
            confirmedIndex = i;
            movingIndex.value = {
              index: i,
              confirmed: true,
            };
            break;
          }
        }
      }
    }

    const mergedIndex = confirmedIndex ?? movingIndex.value?.index ?? index;

    const numSizes = [...cacheSizes.value];
    const nextIndex = mergedIndex + 1;

    // Get boundary
    const startMinSize = getLimitSize(limitSizes[mergedIndex][0], 0);
    const endMinSize = getLimitSize(limitSizes[nextIndex][0], 0);
    const startMaxSize = getLimitSize(limitSizes[mergedIndex][1], mergedContainerSize.value);
    const endMaxSize = getLimitSize(limitSizes[nextIndex][1], mergedContainerSize.value);
    let mergedOffset = offset;

    // Align with the boundary
    if (numSizes[mergedIndex] + mergedOffset < startMinSize) {
      mergedOffset = startMinSize - numSizes[mergedIndex];
    }
    if (numSizes[nextIndex] - mergedOffset < endMinSize) {
      mergedOffset = numSizes[nextIndex] - endMinSize;
    }
    if (numSizes[mergedIndex] + mergedOffset > startMaxSize) {
      mergedOffset = startMaxSize - numSizes[mergedIndex];
    }
    if (numSizes[nextIndex] - mergedOffset > endMaxSize) {
      mergedOffset = numSizes[nextIndex] - endMaxSize;
    }

    // Do offset
    numSizes[mergedIndex] += mergedOffset;
    numSizes[nextIndex] -= mergedOffset;
    innerSizes.value = numSizes;

    return numSizes;
  };

  const onOffsetEnd = () => {
    movingIndex.value = null;
  };

  const onCollapse = (index: number, type: 'start' | 'end') => {
    const currentSizes = getPxSizes();
    const adjustedType = type;

    const currentIndex = adjustedType === 'start' ? index : index + 1;
    const targetIndex = adjustedType === 'start' ? index + 1 : index;

    const currentSize = currentSizes[currentIndex];
    const targetSize = currentSizes[targetIndex];

    if (currentSize !== 0 && targetSize !== 0) {
      // Collapse directly
      currentSizes[currentIndex] = 0;
      currentSizes[targetIndex] += currentSize;
      cacheCollapsedSize.value[index] = currentSize;
    } else {
      const totalSize = currentSize + targetSize;

      const currentSizeMin = getLimitSize(limitSizes[currentIndex][0], 0);
      const currentSizeMax = getLimitSize(limitSizes[currentIndex][1], mergedContainerSize.value);
      const targetSizeMin = getLimitSize(limitSizes[targetIndex][0], 0);
      const targetSizeMax = getLimitSize(limitSizes[targetIndex][1], mergedContainerSize.value);

      const limitStart = Math.max(currentSizeMin, totalSize - targetSizeMax);
      const limitEnd = Math.min(currentSizeMax, totalSize - targetSizeMin);
      const halfOffset = targetSizeMin || (limitEnd - limitStart) / 2;

      const targetCacheCollapsedSize = cacheCollapsedSize.value[index];
      const currentCacheCollapsedSize = totalSize - targetCacheCollapsedSize;

      const shouldUseCache =
        targetCacheCollapsedSize &&
        targetCacheCollapsedSize <= targetSizeMax &&
        targetCacheCollapsedSize >= targetSizeMin &&
        currentCacheCollapsedSize <= currentSizeMax &&
        currentCacheCollapsedSize >= currentSizeMin;

      if (shouldUseCache) {
        currentSizes[targetIndex] = targetCacheCollapsedSize;
        currentSizes[currentIndex] = currentCacheCollapsedSize;
      } else {
        currentSizes[currentIndex] -= halfOffset;
        currentSizes[targetIndex] += halfOffset;
      }
    }

    innerSizes.value = currentSizes;
    return currentSizes;
  };
  return [onOffsetStart, onOffsetUpdate, onOffsetEnd, onCollapse, movingIndex] as const;
}
