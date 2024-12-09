@Extend(Button) function ButtonStyles() {
  .width('22%')
  .height(120)
  .type(ButtonType.Normal)
  .fontColor('#fff')
}

@Entry
@Component
struct Index {
  @State num1: string = '' // 用户输入的十进制数字
  @State convertedNum: string = '' // 存储转换后的数字
  @State numberArr: string[] = [
    'C', '2进制', '4进制', '⌫',
    '7', '8', '9', '8进制',
    '4', '5', '6', '16进制',
    '1', '2', '3', '32进制',
    '10进制','0'
  ]

  // 进制转换函数
  convertToBase(number: string, base: number): string {
    try {
      const decimalValue = parseInt(number, 10) // 将字符串解析为十进制整数
      if (isNaN(decimalValue)) return "错误"
      return decimalValue.toString(base) // 转换为指定的进制
    } catch {
      return "错误"
    }
  }

  build() {
    Column() {

      // 显示输入或转换后的数字
      Row() {
        Text(this.convertedNum || this.num1 || '0')
          .width('100%')
          .height(200)
          .backgroundColor("#010101")
          .fontColor('#fff')
          .fontSize(30)
          .textAlign(TextAlign.End)
          .padding(10)
      }
      .width('100%')
      .height(120)

      Column() {
        // 创建按钮布局
        ForEach(this.numberArr, (item: string, index: number) => {
          if (index % 4 === 0) {
            Row() {
              ForEach(this.numberArr.slice(index, index + 4), (buttonItem: string) => {
                Button(buttonItem)
                  .ButtonStyles()
                  .stateStyles({
                    normal: {
                      .backgroundColor('#000')
                    },
                    pressed: {
                      .backgroundColor('#70eeeeee')
                    }
                  })
                  .onClick(() => {
                    // 判断按钮功能
                    if (buttonItem === 'C') {
                      // 清空输入
                      this.num1 = ''
                      this.convertedNum = ''
                    } else if (buttonItem === '⌫') {
                      // 回退按钮
                      if (this.convertedNum) {
                        this.convertedNum = ''
                        this.num1 = ''
                      } else {
                        this.num1 = this.num1.slice(0, -1)
                      }
                    } else if (buttonItem === '2进制') {
                      // 转换为2进制
                      this.convertedNum = this.convertToBase(this.num1, 2)
                    } else if (buttonItem === '4进制') {
                      // 转换为4进制
                      this.convertedNum = this.convertToBase(this.num1, 4)
                    } else if (buttonItem === '8进制') {
                      // 转换为8进制
                      this.convertedNum = this.convertToBase(this.num1, 8)
                    } else if (buttonItem === '16进制') {
                      // 转换为16进制
                      this.convertedNum = this.convertToBase(this.num1, 16)
                    } else if (buttonItem === '32进制') {
                      // 转换为32进制
                      this.convertedNum = this.convertToBase(this.num1, 32)
                    } else if (buttonItem === '10进制') {
                      // 转换为十进制
                      this.convertedNum = this.convertToBase(this.num1, 10)
                    } else {
                      // 输入数字或小数点
                      if (this.convertedNum) {
                        // 已转换为其他进制，清空转换结果，开始新的输入
                        this.convertedNum = ''
                        this.num1 = buttonItem
                      } else {
                        // 正常输入数字
                        this.num1 += buttonItem
                      }
                    }
                  })
              })
            }
            .width('100%')
            .height(120)
            .justifyContent(FlexAlign.SpaceEvenly)
            .margin({ bottom: 10 })
          }
        })
      }
      .width('100%')
      .height(880)
    }
    .width('100%')
    .height(1000)
    .backgroundColor('#000')
    .justifyContent(FlexAlign.SpaceBetween)
  }
}
