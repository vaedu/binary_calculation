if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    num1?: string;
    numberArr?: string[];
}
function __Button__ButtonStyles(): void {
    Button.width('22%');
    Button.height(120);
    Button.type(ButtonType.Normal);
    Button.fontColor('#fff');
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__num1 = new ObservedPropertySimplePU('' // 用户输入的十进制数字
        , this, "num1");
        this.__numberArr = new ObservedPropertyObjectPU([
            'C', '2进制', '4进制', '⌫',
            '7', '8', '9', '8进制',
            '4', '5', '6', '16进制',
            '1', '2', '3', '32进制',
            '0'
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
        if (params.numberArr !== undefined) {
            this.numberArr = params.numberArr;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__num1.purgeDependencyOnElmtId(rmElmtId);
        this.__numberArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__num1.aboutToBeDeleted();
        this.__numberArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __num1: ObservedPropertySimplePU<string>; // 用户输入的十进制数字
    get num1() {
        return this.__num1.get();
    }
    set num1(newValue: string) {
        this.__num1.set(newValue);
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(33:7)", "entry");
            Column.width('100%');
            Column.height(1000);
            Column.backgroundColor('#000');
            Column.justifyContent(FlexAlign.SpaceBetween);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(35:9)", "entry");
            Column.width('100%');
            Column.height(120);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(36:11)", "entry");
            Row.width('100%');
            Row.height('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.num1);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(37:13)", "entry");
            Text.width('100%');
            Text.height(200);
            Text.backgroundColor("#010101");
            Text.fontColor('#fff');
            Text.fontSize(30);
            Text.textAlign(TextAlign.End);
            Text.padding(10);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(52:9)", "entry");
            Column.width('100%');
            Column.height(880);
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
                                Row.debugLine("entry/src/main/ets/pages/Index.ets(55:15)", "entry");
                                Row.width('100%');
                                Row.height(120);
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
                                        Button.debugLine("entry/src/main/ets/pages/Index.ets(57:19)", "entry");
                                        __Button__ButtonStyles();
                                        ViewStackProcessor.visualState("normal");
                                        Button.backgroundColor('#000');
                                        ViewStackProcessor.visualState("pressed");
                                        Button.backgroundColor('#70eeeeee');
                                        ViewStackProcessor.visualState();
                                        Button.onClick(() => {
                                            if (buttonItem === 'C') {
                                                this.num1 = '';
                                            }
                                            else if (buttonItem === '⌫') {
                                                this.num1 = this.num1.slice(0, -1);
                                            }
                                            else if (buttonItem === '2进制') {
                                                this.num1 = this.convertToBase(this.num1, 2);
                                            }
                                            else if (buttonItem === '4进制') {
                                                this.num1 = this.convertToBase(this.num1, 4);
                                            }
                                            else if (buttonItem === '8进制') {
                                                this.num1 = this.convertToBase(this.num1, 8);
                                            }
                                            else if (buttonItem === '16进制') {
                                                this.num1 = this.convertToBase(this.num1, 16);
                                            }
                                            else if (buttonItem === '32进制') {
                                                this.num1 = this.convertToBase(this.num1, 32);
                                            }
                                            else {
                                                this.num1 += buttonItem;
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
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.binary_calculation", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
