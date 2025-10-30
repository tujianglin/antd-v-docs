<script lang="ts" setup>
import {
  CommentOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  ShareAltOutlined,
  StarOutlined,
} from '@ant-design/icons-vue';
import { Button, Dropdown, Menu, Space, Tooltip } from 'antd-v';
</script>

<template>
  <div>
    <Space.Compact block>
      <Tooltip title="Like">
        <Button :icon="LikeOutlined" />
      </Tooltip>
      <Tooltip title="Comment">
        <Button :icon="CommentOutlined" />
      </Tooltip>
      <Tooltip title="Star">
        <Button :icon="StarOutlined" />
      </Tooltip>
      <Tooltip title="Heart">
        <Button :icon="HeartOutlined" />
      </Tooltip>
      <Tooltip title="Share">
        <Button :icon="ShareAltOutlined" />
      </Tooltip>
      <Tooltip title="Download">
        <Button :icon="DownloadOutlined" />
      </Tooltip>
      <Dropdown placement="bottomRight" :trigger="['click']">
        <Button :icon="EllipsisOutlined" />
        <template #overlay>
          <Menu>
            <Menu.Item>
              <a href="javascript:;">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
              <a href="javascript:;">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
              <a href="javascript:;">3rd menu item</a>
            </Menu.Item>
          </Menu>
        </template>
      </Dropdown>
    </Space.Compact>
    <br />
    <Space.Compact block>
      <Button type="primary">Button 1</Button>
      <Button type="primary">Button 2</Button>
      <Button type="primary">Button 3</Button>
      <Button type="primary">Button 4</Button>
      <Tooltip title="Tooltip">
        <Button type="primary" :icon="DownloadOutlined" disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button type="primary" :icon="DownloadOutlined" />
      </Tooltip>
    </Space.Compact>
    <br />
    <Space.Compact block>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Tooltip title="Tooltip">
        <Button :icon="DownloadOutlined" disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button :icon="DownloadOutlined" />
      </Tooltip>
      <Button type="primary">Button 4</Button>
      <Dropdown placement="bottomRight" :trigger="['click']">
        <Button :icon="EllipsisOutlined" type="primary" />

        <template #overlay>
          <Menu>
            <Menu.Item>
              <a href="javascript:;">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
              <a href="javascript:;">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
              <a href="javascript:;">3rd menu item</a>
            </Menu.Item>
          </Menu>
        </template>
      </Dropdown>
    </Space.Compact>
  </div>
</template>
