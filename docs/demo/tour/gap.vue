<script lang="tsx">
import { computed, defineComponent, ref } from 'vue';
import { Button, Col, Row, Slider, Space, Tour, Typography } from 'antd-v';
import type { TourProps } from 'antd-v';
export default defineComponent({
  setup() {
    const { Text } = Typography;

    const tourNodeRef = ref(null);
    const radius = ref(8);
    const offsetX = ref(2);
    const offsetY = ref(2);
    const offset = ref(2);
    const open = ref(false);
    const offsetDirection = ref<'both' | 'individual'>('individual');

    const steps: TourProps['steps'] = [
      {
        title: 'Upload File',
        description: 'Put your files here.',
        cover: (
          <img
            draggable={false}
            alt="tour.png"
            src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          />
        ),
        target: () => tourNodeRef.value,
      },
    ];

    const offsetGap = computed(() =>
      offsetDirection.value === 'both'
        ? { offset }
        : {
            offset: [offsetX.value, offsetY.value] as [number, number],
          },
    );
    return () => (
      <div ref={tourNodeRef}>
        <Button type="primary" onClick={() => (open.value = true)}>
          Begin Tour
        </Button>
        <Space style={{ display: 'flex', marginTop: '12px' }} vertical>
          <Row>
            <Col span={6}>
              <Text>Radius:</Text>
            </Col>
            <Col span={12}>
              <Slider value={radius.value} onChange={(val) => val && (radius.value = val)} />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text> offset:</Text>
            </Col>
            <Col span={12}>
              <Slider
                value={offset.value}
                max={50}
                onChange={(val) => val && (offset.value = val)}
                onFocus={() => (offsetDirection.value = 'both')}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text>Horizontal offset:</Text>
            </Col>
            <Col span={12}>
              <Slider
                value={offsetX.value}
                max={50}
                onChange={(val) => val && (offsetX.value = val)}
                onFocus={() => (offsetDirection.value = 'individual')}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text>Vertical offset:</Text>
            </Col>
            <Col span={12}>
              <Slider
                value={offsetY.value}
                max={50}
                onChange={(val) => val && (offsetY.value = val)}
                onFocus={() => (offsetDirection.value = 'individual')}
              />
            </Col>
          </Row>
        </Space>
        <Tour
          open={open.value}
          onClose={() => (open.value = false)}
          steps={steps}
          gap={{ ...offsetGap.value, radius: radius.value }}
        />
      </div>
    );
  },
});
</script>
