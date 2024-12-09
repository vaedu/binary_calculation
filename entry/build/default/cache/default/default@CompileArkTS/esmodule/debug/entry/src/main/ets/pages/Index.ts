if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    num1?: string;
    convertedNum?: string;
    numberArr?: string[];
}
function __Button__ButtonStyles(): void {
    Button.width('22%');
    Button.height(120);
    Button.type(ButtonType.Normal);
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__num1 = new ObservedPropertySimplePU('' // 存储用户输入的原始数字
        , this, "num1");
        this.__convertedNum = new ObservedPropertySimplePU('' // 存储转换后的数字
        , this, "convertedNum");
        this.__numberArr = new ObservedPropertyObjectPU([
            'C', '2进制', '4进制', '⌫',
            '7', '8', '9', '8进制',
            '4', '5', '6', '16进制',
            '1', '2', '3', '32进制',
            '0', '10进制'
        ]
        // 进制转换函数
        , this, "numberArr");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.num1 !== undefined) {
            this.num1 = params.num1;
        }
        if (params.convertedNum !== undefined) {
            this.convertedNum = params.convertedNum;
        }
        if (params.numberArr !== undefined) {
            this.numberArr = params.numberArr;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__num1.purgeDependencyOnElmtId(rmElmtId);
        this.__convertedNum.purgeDependencyOnElmtId(rmElmtId);
        this.__numberArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__num1.aboutToBeDeleted();
        this.__convertedNum.aboutToBeDeleted();
        this.__numberArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __num1: ObservedPropertySimplePU<string>; // 存储用户输入的原始数字
    get num1() {
        return this.__num1.get();
    }
    set num1(newValue: string) {
        this.__num1.set(newValue);
    }
    private __convertedNum: ObservedPropertySimplePU<string>; // 存储转换后的数字
    get convertedNum() {
        return this.__convertedNum.get();
    }
    set convertedNum(newValue: string) {
        this.__convertedNum.set(newValue);
    }
    private __numberArr: ObservedPropertyObjectPU<string[]>;
    get numberArr() {
        return this.__numberArr.get();
    }
    set numberArr(newValue: string[]) {
        this.__numberArr.set(newValue);
    }
    // 进制转换函数
    convertToBase(number: string, base: number): string {
        try {
            const decimalValue = parseInt(number, 10); // 将字符串解析为十进制整数
            if (isNaN(decimalValue))
                return "错误";
            return decimalValue.toString(base); // 转换为指定的进制
        }
        catch {
            return "错误";
        }
    }
    // 将转换后的数字转换回十进制
    convertToDecimal(number: string): string {
        try {
            const decimalValue = parseInt(number, 10); // 将当前数字按十进制转换
            return decimalValue.toString(10); // 转换回十进制
        }
        catch {
            return "错误";
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/pages/Index", isUserCreateStack: false });
            Navigation.hideToolBar(true);
            Navigation.hideTitleBar(true);
            Navigation.width('100%');
            Navigation.height('100%');
            Navigation.backgroundColor('#000');
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('150%');
            Column.justifyContent(FlexAlign.SpaceEvenly);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(120);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.num1 || this.convertedNum);
            Text.width('100%');
            Text.height(100);
            Text.backgroundColor("#010101");
            Text.fontColor('#fff');
            Text.fontSize(30);
            Text.textAlign(TextAlign.End);
            Text.padding(10);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (index % 4 === 0) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.width('100%');
                                Row.height(100);
                                Row.justifyContent(FlexAlign.SpaceEvenly);
                                Row.margin({
                                    bottom: 10
                                });
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                ForEach.create();
                                const forEachItemGenFunction = _item => {
                                    const buttonItem = _item;
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Button.createWithLabel(buttonItem);
                                        __Button__ButtonStyles();
                                        ViewStackProcessor.visualState("normal");
                                        Button.fontColor('#fff');
                                        Button.backgroundColor('#000');
                                        ViewStackProcessor.visualState("pressed");
                                        Button.fontColor('#000');
                                        Button.backgroundColor('#fff');
                                        ViewStackProcessor.visualState();
                                        Button.onClick(() => {
                                            if (buttonItem === 'C') {
                                                // 清除按钮
                                                this.num1 = '';
                                                this.convertedNum = '';
                                            }
                                            else if (buttonItem === '⌫') {
                                                // 回退按钮
                                                if (this.convertedNum) {
                                                    this.convertedNum = this.convertToDecimal(this.convertedNum);
                                                }
                                                else {
                                                    this.num1 = this.num1.slice(0, -1);
                                                }
                                            }
                                            else if (buttonItem === '2进制') {
                                                // 转换为2进制
                                                this.convertedNum = this.convertToBase(this.num1, 2);
                                            }
                                            else if (buttonItem === '4进制') {
                                                // 转换为4进制
                                                this.convertedNum = this.convertToBase(this.num1, 4);
                                            }
                                            else if (buttonItem === '8进制') {
                                                // 转换为8进制
                                                this.convertedNum = this.convertToBase(this.num1, 8);
                                            }
                                            else if (buttonItem === '16进制') {
                                                // 转换为16进制
                                                this.convertedNum = this.convertToBase(this.num1, 16);
                                            }
                                            else if (buttonItem === '32进制') {
                                                // 转换为32进制
                                                this.convertedNum = this.convertToBase(this.num1, 32);
                                            }
                                            else if (buttonItem === '10进制') {
                                                // 将当前转换数字转换回十进制
                                                this.convertedNum = this.convertToDecimal(this.convertedNum || this.num1);
                                            }
                                            else {
                                                // 数字或小数点
                                                if (this.convertedNum) {
                                                    this.num1 = buttonItem; // 如果已经转换过进制，继续输入新的数字
                                                    this.convertedNum = ''; // 清空之前的转换结果
                                                }
                                                else {
                                                    this.num1 += buttonItem; // 否则直接输入数字
                                                }
                                            }
                                        });
                                    }, Button);
                                    Button.pop();
                                };
                                this.forEachUpdateFunction(elmtId, this.numberArr.slice(index, index + 4), forEachItemGenFunction);
                            }, ForEach);
                            ForEach.pop();
                            Row.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.numberArr, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.binary_calculation", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
