<template>
  <div class="device-container">
    <svg id="line-container-id" class="line-container" height="100%" width="100%">
      <connection-line-component style="z-index: -10"
                                 id_1="7"
                                 :connection-point_1="{side: 'left', percent: 44}"
                                 id_2="9"
                                 :connection-point_2="{side: 'right', percent: 90}">
      </connection-line-component>
    </svg>
    <DeviceDisplayComponent id="7" title-device="АНТЕННАЯ СИСТЕМА" class="antenna-system-device">
      <DisplayParametersComponent :device-data="antennaDeviceData"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="10" title-device="ТЕСТ-ТРАНСЛЯТОР" class="test-translyator-device">
      <DisplayParametersComponent :device-data="testTranslyatorDeviceData"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="УМ #1" class="amplifier-device-1">
      <DisplayParametersComponent :device-data="amplifier1DeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="8" title-device="УМ #2" class="amplifier-device-2">
      <DisplayParametersComponent :device-data="amplifier1DeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="9" title-device="МШУ #1" class="MSHU-device-1">
      <DisplayParametersComponent :device-data="MSHUDeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="МШУ #2" class="MSHU-device-2">
      <DisplayParametersComponent :device-data="MSHUDeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВВЕРХ #1" class="up-converter-1">
      <DisplayParametersComponent :device-data="upConverterDeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВВЕРХ #2" class="up-converter-2">
      <DisplayParametersComponent :device-data="upConverterDeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВНИЗ #1" class="down-converter-1">
      <DisplayParametersComponent :device-data="downConverterDeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВНИЗ #2" class="down-converter-2">
      <DisplayParametersComponent :device-data="downConverterDeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
  </div>
</template>

<script>
import PopUpWindow from './PopUpWindow'
import DeviceDisplayComponent from './DeviceDisplayComponent'
import ConnectionLineComponent from './ConnectionLineComponent'
import DisplayParametersComponent from './DisplayParametersComponent'

export default {
  name: 'ContainerDeviceComponent',
  data () {
    return {
      antennaDeviceData: {
        deviceParameters: [
          {
            nameParameter: 'Сигнал',
            valueParameter: '100 дБ'
          },
          {
            nameParameter: 'Азимут',
            valueParameter: '100град'
          },
          {
            nameParameter: 'Угол места',
            valueParameter: '45 град'
          },
          {
            nameParameter: 'Сканер',
            valueParameter: 'Вкл'
          },
          {
            nameParameter: 'Режим',
            valueParameter: 'Автомат'
          }],
        title: 'АНТЕННАЯ СИСТЕМА'
      },
      testTranslyatorDeviceData: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '100'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '20'
          },
          {
            nameParameter: 'ВЧ выход',
            valueParameter: '1'
          }],
        title: 'ТЕСТ-ТРАНСЛЯТОР'
      },
      amplifier1DeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Режим',
            valueParameter: 'Токовый'
          },
          {
            nameParameter: 'Вых. мощность (Вт)',
            valueParameter: '120'
          },
          {
            nameParameter: 'Запрет несущей',
            valueParameter: 'Нет'
          },
          {
            nameParameter: 't °C(вх,вых Δ)',
            valueParameter: '67'
          }],
        title: 'УМ #1'
      },
      amplifier1DeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Режим',
            valueParameter: 'Ключевой'
          },
          {
            nameParameter: 'Вых. мощность (Вт)',
            valueParameter: '100'
          },
          {
            nameParameter: 'Запрет несущей',
            valueParameter: 'Есть'
          },
          {
            nameParameter: 't °C(вх,вых Δ)',
            valueParameter: '75'
          }],
        title: 'УМ #2'
      },
      MSHUDeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Значение тока (мА)',
            valueParameter: '100'
          },
          {
            nameParameter: 'Пределы тока (мА)',
            valueParameter: '1000'
          },
          {
            nameParameter: 'Напряжение A (В)',
            valueParameter: '220'
          },
          {
            nameParameter: 'Напряжение B (В)',
            valueParameter: '200'
          }],
        title: 'МШУ #1'
      },
      MSHUDeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Значение тока (мА)',
            valueParameter: '200'
          },
          {
            nameParameter: 'Пределы тока (мА)',
            valueParameter: '2000'
          },
          {
            nameParameter: 'Напряжение A (В)',
            valueParameter: '226'
          },
          {
            nameParameter: 'Напряжение B (В)',
            valueParameter: '213'
          }],
        title: 'МШУ #2'
      },
      upConverterDeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '200'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '25'
          },
          {
            nameParameter: 'ВЧ выход',
            valueParameter: '2'
          }],
        title: 'КОНВЕРТЕР ВВЕРХ #1'
      },
      upConverterDeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '300'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '15'
          },
          {
            nameParameter: 'ВЧ выход',
            valueParameter: '1'
          }],
        title: 'КОНВЕРТЕР ВВЕРХ #2'
      },
      downConverterDeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '450'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '15'
          }],
        title: 'КОНВЕРТЕР ВНИЗ #1'
      },
      downConverterDeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '300'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '7'
          }],
        title: 'КОНВЕРТЕР ВНИЗ #1'
      },
      nodes: '',
      template: ''
    }
  },
  components: {
    PopUpWindow,
    DeviceDisplayComponent,
    ConnectionLineComponent,
    DisplayParametersComponent
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.line-container {
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 5;
}
.device-container {
  grid-column: 2;
  grid-row: 2;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 20% 20% 20% 20%;
  grid-template-columns: 25% 25% 25% 25%;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
}
.antenna-system-device {
  grid-column: 4;
  grid-row: 1;
  width: 80%;
  height: 80%;
//justify-self: center;
}
.test-translyator-device {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
  width: 50%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.amplifier-device-1 {
  grid-column: 1;
  grid-row: 2;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.amplifier-device-2 {
  grid-column: 2;
  grid-row: 2;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.MSHU-device-1 {
  grid-column: 3;
  grid-row: 2;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.MSHU-device-2 {
  grid-column: 4;
  grid-row: 2;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.up-converter-1 {
  grid-column: 1;
  grid-row: 3;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.up-converter-2 {
  grid-column: 2;
  grid-row: 3;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.down-converter-1 {
  grid-column: 3;
  grid-row: 3;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
}
.down-converter-2 {
  grid-column: 4;
  grid-row: 3;
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;;
}
</style>
