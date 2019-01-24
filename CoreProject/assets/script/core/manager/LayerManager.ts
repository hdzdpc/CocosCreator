import Singleton from "../base/Singleton";
import ViewLayer from "../const/ViewLayer";
import App from "../App";

/*
 * @Author: yanmingjie0223@qq.com
 * @Date: 2019-01-18 16:20:26
 * @Last Modified by: yanmingjie0223@qq.com
 * @Last Modified time: 2019-01-24 21:48:05
 */
export default class LayerManager extends Singleton {

    public constructor() {
        super();
    }

    /**
     * 初始化
     */
    public init(): void {
        const rootCom: fgui.GComponent = fgui.GRoot.inst;
        rootCom.addChild(ViewLayer.BOTTOM_COMPONENT);
        rootCom.addChild(ViewLayer.MIDDLE_COMPONENT);
        rootCom.addChild(ViewLayer.TOP_COMPONENT);
        rootCom.addChild(ViewLayer.GUIDE_COMPONENT);
        rootCom.addChild(ViewLayer.WINDOW_COMPONENT);
        rootCom.addChild(ViewLayer.MAX_COMPONENT);

        ViewLayer.BOTTOM_COMPONENT.name = ViewLayer.BOTTOM_LAYER;
        ViewLayer.MIDDLE_COMPONENT.name = ViewLayer.MIDDLE_LAYER;
        ViewLayer.TOP_COMPONENT.name = ViewLayer.TOP_LAYER;
        ViewLayer.GUIDE_COMPONENT.name = ViewLayer.GUIDE_LAYER;
        ViewLayer.WINDOW_COMPONENT.name = ViewLayer.WINDOW_LAYER;
        ViewLayer.MAX_COMPONENT.name = ViewLayer.MAX_LAYER;

        ViewLayer.BOTTOM_COMPONENT.addRelation(rootCom, fgui.RelationType.Size);
        ViewLayer.MIDDLE_COMPONENT.addRelation(rootCom, fgui.RelationType.Size);
        ViewLayer.TOP_COMPONENT.addRelation(rootCom, fgui.RelationType.Size);
        ViewLayer.GUIDE_COMPONENT.addRelation(rootCom, fgui.RelationType.Size);
        ViewLayer.WINDOW_COMPONENT.addRelation(rootCom, fgui.RelationType.Size);
        ViewLayer.MAX_COMPONENT.addRelation(rootCom, fgui.RelationType.Size);

        ViewLayer.BOTTOM_COMPONENT.setSize(App.StageManager.viewWidth, App.StageManager.viewHeight);
        ViewLayer.MIDDLE_COMPONENT.setSize(App.StageManager.viewWidth, App.StageManager.viewHeight);
        ViewLayer.TOP_COMPONENT.setSize(App.StageManager.viewWidth, App.StageManager.viewHeight);
        ViewLayer.GUIDE_COMPONENT.setSize(App.StageManager.viewWidth, App.StageManager.viewHeight);
        ViewLayer.WINDOW_COMPONENT.setSize(App.StageManager.viewWidth, App.StageManager.viewHeight);
        ViewLayer.MAX_COMPONENT.setSize(App.StageManager.viewWidth, App.StageManager.viewHeight);
    }

    /**
     * 获取层级GComponent节点
     * @param layer
     */
    public getLayerComponent(layer: string): fgui.GComponent {
        let layerCom: fgui.GComponent;
        switch (layer) {
            case ViewLayer.BOTTOM_LAYER:
                layerCom = ViewLayer.BOTTOM_COMPONENT;
                break;
            case ViewLayer.MIDDLE_LAYER:
                layerCom = ViewLayer.MIDDLE_COMPONENT;
                break;
            case ViewLayer.TOP_LAYER:
                layerCom = ViewLayer.TOP_COMPONENT;
                break;
            case ViewLayer.GUIDE_LAYER:
                layerCom = ViewLayer.GUIDE_COMPONENT;
                break;
            case ViewLayer.WINDOW_LAYER:
                layerCom = ViewLayer.WINDOW_COMPONENT;
                break;
            case ViewLayer.MAX_LAYER:
                layerCom = ViewLayer.MAX_COMPONENT;
                break;
        }
        return layerCom;
    }

}