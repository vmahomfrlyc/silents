gdjs.titleCode = {};
gdjs.titleCode.localVariables = [];
gdjs.titleCode.GDbg3Objects1= [];
gdjs.titleCode.GDbg3Objects2= [];
gdjs.titleCode.GDNewTextObjects1= [];
gdjs.titleCode.GDNewTextObjects2= [];
gdjs.titleCode.GDmade_9595byObjects1= [];
gdjs.titleCode.GDmade_9595byObjects2= [];
gdjs.titleCode.GDNewText2Objects1= [];
gdjs.titleCode.GDNewText2Objects2= [];


gdjs.titleCode.mapOfGDgdjs_9546titleCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.titleCode.GDNewText2Objects1});
gdjs.titleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.titleCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_9546titleCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mainmenu", false);
}}

}


};

gdjs.titleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleCode.GDbg3Objects1.length = 0;
gdjs.titleCode.GDbg3Objects2.length = 0;
gdjs.titleCode.GDNewTextObjects1.length = 0;
gdjs.titleCode.GDNewTextObjects2.length = 0;
gdjs.titleCode.GDmade_9595byObjects1.length = 0;
gdjs.titleCode.GDmade_9595byObjects2.length = 0;
gdjs.titleCode.GDNewText2Objects1.length = 0;
gdjs.titleCode.GDNewText2Objects2.length = 0;

gdjs.titleCode.eventsList0(runtimeScene);
gdjs.titleCode.GDbg3Objects1.length = 0;
gdjs.titleCode.GDbg3Objects2.length = 0;
gdjs.titleCode.GDNewTextObjects1.length = 0;
gdjs.titleCode.GDNewTextObjects2.length = 0;
gdjs.titleCode.GDmade_9595byObjects1.length = 0;
gdjs.titleCode.GDmade_9595byObjects2.length = 0;
gdjs.titleCode.GDNewText2Objects1.length = 0;
gdjs.titleCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['titleCode'] = gdjs.titleCode;
