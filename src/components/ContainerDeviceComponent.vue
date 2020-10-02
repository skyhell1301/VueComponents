<template>
  <div class="device-container">
    <svg id="line-container-id" class="line-container" height="100%" width="100%" fill="grid-pattern">
      <connection-line-component id_1="7"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="9"
                                 :connection-point_2="{side: 'left', percent: 50}"
                                 :point-edges-array="lineData"
      >
      </connection-line-component>
    </svg>
    <DeviceDisplayComponent id="7" title-device="АНТЕННАЯ СИСТЕМА" class="antenna-system-device">
      <DisplayParametersComponent :device-data="antennaDeviceData"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="10" title-device="ТЕСТ-ТРАНСЛЯТОР" class="test-translyator-device">
<!--      <DisplayParametersComponent :device-data="testTranslyatorDeviceData"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="УМ #1" class="amplifier-device-1">
<!--      <DisplayParametersComponent :device-data="amplifier1DeviceData1"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="8" title-device="УМ #2" class="amplifier-device-2">
<!--      <DisplayParametersComponent :device-data="amplifier1DeviceData2"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="9" title-device="МШУ #1" class="MSHU-device-1">
<!--      <DisplayParametersComponent :device-data="MSHUDeviceData1"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="МШУ #2" class="MSHU-device-2">
<!--      <DisplayParametersComponent :device-data="MSHUDeviceData2"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВВЕРХ #1" class="up-converter-1">
<!--      <DisplayParametersComponent :device-data="upConverterDeviceData1"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВВЕРХ #2" class="up-converter-2">
<!--      <DisplayParametersComponent :device-data="upConverterDeviceData2"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВНИЗ #1" class="down-converter-1">
<!--      <DisplayParametersComponent :device-data="downConverterDeviceData1"></DisplayParametersComponent>-->
    </DeviceDisplayComponent>
    <DeviceDisplayComponent title-device="КОНВЕРТЕР ВНИЗ #2" class="down-converter-2">
<!--      <DisplayParametersComponent :device-data="downConverterDeviceData2"></DisplayParametersComponent>-->
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
      inputValue: '',
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
      lineData: [
        {
          direction: 'left',
          value: 5
        },
        {
          direction: 'down',
          value: 55
        },
        {
          direction: 'left',
          value: 100
        },
        {
          direction: 'down',
          value: 45
        }
      ],
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
    let context = this
    // Create a new WebSocket.
    let socket = new WebSocket('ws://10.10.0.16:8080')

    // Define the
    // let message = document.getElementById('message')
    //
    // function transmitMessage() {
    //   socket.send(message.value)
    // }

    socket.onmessage = function (e) {
      let text = JSON.parse(e.data)
      if (text.DeviceParameters !== null && text.DeviceParameters !== undefined) {
        context.inputValue = text.DeviceParameters
        if (context.inputValue.antennaDeviceData !== null && context.inputValue.antennaDeviceData !== undefined) {
          context.antennaDeviceData = context.inputValue.antennaDeviceData
        }
        if (context.inputValue.testTranslyatorDeviceData !== null && context.inputValue.testTranslyatorDeviceData !== undefined) {
          context.testTranslyatorDeviceData = context.inputValue.testTranslyatorDeviceData
        }
        if (context.inputValue.amplifier1DeviceData1 !== null && context.inputValue.amplifier1DeviceData1 !== undefined) {
          context.amplifier1DeviceData1 = context.inputValue.amplifier1DeviceData1
        }
        if (context.inputValue.amplifier1DeviceData2 !== null && context.inputValue.amplifier1DeviceData2 !== undefined) {
          context.amplifier1DeviceData2 = context.inputValue.amplifier1DeviceData2
        }
        if (context.inputValue.MSHUDeviceData1 !== null && context.inputValue.MSHUDeviceData1 !== undefined) {
          context.MSHUDeviceData1 = context.inputValue.MSHUDeviceData1
        }
        if (context.inputValue.MSHUDeviceData2 !== null && context.inputValue.MSHUDeviceData2 !== undefined) {
          context.MSHUDeviceData2 = context.inputValue.MSHUDeviceData2
        }
        if (context.inputValue.upConverterDeviceData1 !== null && context.inputValue.upConverterDeviceData1 !== undefined) {
          context.upConverterDeviceData1 = context.inputValue.upConverterDeviceData1
        }
        if (context.inputValue.upConverterDeviceData2 !== null && context.inputValue.upConverterDeviceData2 !== undefined) {
          context.upConverterDeviceData2 = context.inputValue.upConverterDeviceData2
        }
        if (context.inputValue.downConverterDeviceData1 !== null && context.inputValue.downConverterDeviceData1 !== undefined) {
          context.downConverterDeviceData1 = context.inputValue.downConverterDeviceData1
        }
        if (context.inputValue.downConverterDeviceData2 !== null && context.inputValue.downConverterDeviceData2 !== undefined) {
          context.downConverterDeviceData2 = context.inputValue.downConverterDeviceData2
        }
      }
      // console.log(this.inputValue)
      // this.inputValue = JSON.parse(e.data)
      // container.appendChild(text)
    }
  }
}
</script>

<style scoped>
.line-container {
  z-index: -1;
  will-change: transform;
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 5;
  background-image: url('../assets/images/svg/grid.svg');
}
.device-container {
  z-index: 1;
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
