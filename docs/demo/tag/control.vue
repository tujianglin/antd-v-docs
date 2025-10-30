<script lang="tsx">
import { PlusOutlined } from '@ant-design/icons-vue';
import type { InputRef } from 'antd-v';
import { Flex, Input, Tag, theme, Tooltip } from 'antd-v';
import { computed, type CSSProperties, defineComponent, nextTick, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const tagInputStyle: CSSProperties = {
      width: '64px',
      height: '22px',
      marginInlineEnd: `${8}px`,
      verticalAlign: 'top',
    };

    const { token } = theme.useToken();
    const tags = ref<string[]>(['Unremovable', 'Tag 2', 'Tag 3']);
    const inputVisible = ref(false);
    const inputValue = ref('');
    const editInputIndex = ref(-1);
    const editInputValue = ref('');
    const inputRef = ref<InputRef>(null);
    const editInputRef = ref<InputRef>(null);

    watch(
      inputVisible,
      async () => {
        await nextTick();
        if (inputVisible.value) {
          inputRef.value?.focus();
        }
      },
      { immediate: true },
    );

    watch(
      editInputValue,
      () => {
        editInputRef.value?.focus();
      },
      { immediate: true },
    );

    const handleClose = (removedTag: string) => {
      const newTags = tags.value.filter((tag) => tag !== removedTag);
      console.log(newTags);
      tags.value = newTags;
    };

    const showInput = () => {
      console.log(1);
      inputVisible.value = true;
    };

    const handleInputConfirm = () => {
      console.log(1);
      if (inputValue.value && !tags.value.includes(inputValue.value)) {
        tags.value = [...tags.value, inputValue.value];
      }
      inputVisible.value = false;
      inputValue.value = '';
    };

    const handleEditInputConfirm = () => {
      const newTags = [...tags.value];
      newTags[editInputIndex.value] = editInputValue.value;
      tags.value = newTags;
      editInputIndex.value = -1;
      editInputValue.value = '';
    };

    const tagPlusStyle = computed<CSSProperties>(() => ({
      height: `${22}px`,
      background: token.value.colorBgContainer,
      borderStyle: 'dashed',
    }));

    return () => (
      <Flex gap="small" align="center" wrap>
        {tags.value.map((tag, index) => {
          if (editInputIndex.value === index) {
            return (
              <Input
                ref={editInputRef}
                key={tag}
                size="small"
                style={tagInputStyle}
                v-modelvalue={editInputValue.value}
                onBlur={handleEditInputConfirm}
                onPressenter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closeIcon={index !== 0} style={{ userSelect: 'none' }} onClose={() => handleClose(tag)}>
              <span
                onDblclick={(e) => {
                  if (index !== 0) {
                    editInputIndex.value = index;
                    editInputValue.value = tag;
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible.value ? (
          <Input
            ref={inputRef}
            type="text"
            size="small"
            style={tagInputStyle}
            v-model:value={inputValue.value}
            onBlur={handleInputConfirm}
            onPressenter={handleInputConfirm}
          />
        ) : (
          <Tag style={tagPlusStyle.value} icon={<PlusOutlined />} onClick={showInput}>
            New Tag
          </Tag>
        )}
      </Flex>
    );
  },
});
</script>
