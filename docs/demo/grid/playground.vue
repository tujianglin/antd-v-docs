<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Col, Row, Slider } from 'antd-v';
export default defineComponent({
  setup() {
    const gutters: Record<PropertyKey, number> = {};
    const vgutters: Record<PropertyKey, number> = {};
    const colCounts: Record<PropertyKey, number> = {};

    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      colCounts[i] = value;
    });

    const gutterKey = ref(1);
    const vgutterKey = ref(1);
    const colCountKey = ref(2);

    return () => {
      const cols = [];
      const colCount = colCounts[colCountKey.value];
      let colCode = '';
      for (let i = 0; i < colCount; i++) {
        cols.push(
          <Col key={i.toString()} span={24 / colCount}>
            <div>Column</div>
          </Col>,
        );
        colCode += `  <Col span={${24 / colCount}} />\n`;
      }

      return (
        <div id="grid-demo-playground">
          <span>Horizontal Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(gutters).length - 1}
              v-model:value={gutterKey.value}
              marks={gutters}
              step={null}
              tooltip={{ formatter: (value) => gutters[value as number] }}
            />
          </div>
          <span>Vertical Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(vgutters).length - 1}
              v-model:value={vgutterKey.value}
              marks={vgutters}
              step={null}
              tooltip={{ formatter: (value) => vgutters[value as number] }}
            />
          </div>
          <span>Column Count:</span>
          <div style={{ width: '50%', marginBottom: '48px' }}>
            <Slider
              min={0}
              max={Object.keys(colCounts).length - 1}
              v-model:value={colCountKey.value}
              marks={colCounts}
              step={null}
              tooltip={{ formatter: (value) => colCounts[value as number] }}
            />
          </div>
          <Row gutter={[gutters[gutterKey.value], vgutters[vgutterKey.value]]}>
            {cols}
            {cols}
          </Row>
          Another Row:
          <Row gutter={[gutters[gutterKey.value], vgutters[vgutterKey.value]]}>{cols}</Row>
          <pre class="demo-code">{`<Row gutter={[${gutters[gutterKey.value]}, ${vgutters[vgutterKey.value]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
          <pre class="demo-code">{`<Row gutter={[${gutters[gutterKey.value]}, ${vgutters[vgutterKey.value]}]}>\n${colCode}</Row>`}</pre>
        </div>
      );
    };
  },
});
</script>
