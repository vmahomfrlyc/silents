gdjs.MainmenuCode = {};
gdjs.MainmenuCode.localVariables = [];
gdjs.MainmenuCode.GDbg1Objects1= [];
gdjs.MainmenuCode.GDbg1Objects2= [];
gdjs.MainmenuCode.GDbg2Objects1= [];
gdjs.MainmenuCode.GDbg2Objects2= [];
gdjs.MainmenuCode.GDbg3Objects1= [];
gdjs.MainmenuCode.GDbg3Objects2= [];
gdjs.MainmenuCode.GDbgmainObjects1= [];
gdjs.MainmenuCode.GDbgmainObjects2= [];
gdjs.MainmenuCode.GDSilent_9595StringsObjects1= [];
gdjs.MainmenuCode.GDSilent_9595StringsObjects2= [];
gdjs.MainmenuCode.GDbyObjects1= [];
gdjs.MainmenuCode.GDbyObjects2= [];
gdjs.MainmenuCode.GDPlayObjects1= [];
gdjs.MainmenuCode.GDPlayObjects2= [];
gdjs.MainmenuCode.GDSaveObjects1= [];
gdjs.MainmenuCode.GDSaveObjects2= [];


gdjs.MainmenuCode.mapOfGDgdjs_9546MainmenuCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainmenuCode.GDPlayObjects1});
gdjs.MainmenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainmenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainmenuCode.mapOfGDgdjs_9546MainmenuCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.MainmenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainmenuCode.GDbg1Objects1.length = 0;
gdjs.MainmenuCode.GDbg1Objects2.length = 0;
gdjs.MainmenuCode.GDbg2Objects1.length = 0;
gdjs.MainmenuCode.GDbg2Objects2.length = 0;
gdjs.MainmenuCode.GDbg3Objects1.length = 0;
gdjs.MainmenuCode.GDbg3Objects2.length = 0;
gdjs.MainmenuCode.GDbgmainObjects1.length = 0;
gdjs.MainmenuCode.GDbgmainObjects2.length = 0;
gdjs.MainmenuCode.GDSilent_9595StringsObjects1.length = 0;
gdjs.MainmenuCode.GDSilent_9595StringsObjects2.length = 0;
gdjs.MainmenuCode.GDbyObjects1.length = 0;
gdjs.MainmenuCode.GDbyObjects2.length = 0;
gdjs.MainmenuCode.GDPlayObjects1.length = 0;
gdjs.MainmenuCode.GDPlayObjects2.length = 0;
gdjs.MainmenuCode.GDSaveObjects1.length = 0;
gdjs.MainmenuCode.GDSaveObjects2.length = 0;

gdjs.MainmenuCode.eventsList0(runtimeScene);
gdjs.MainmenuCode.GDbg1Objects1.length = 0;
gdjs.MainmenuCode.GDbg1Objects2.length = 0;
gdjs.MainmenuCode.GDbg2Objects1.length = 0;
gdjs.MainmenuCode.GDbg2Objects2.length = 0;
gdjs.MainmenuCode.GDbg3Objects1.length = 0;
gdjs.MainmenuCode.GDbg3Objects2.length = 0;
gdjs.MainmenuCode.GDbgmainObjects1.length = 0;
gdjs.MainmenuCode.GDbgmainObjects2.length = 0;
gdjs.MainmenuCode.GDSilent_9595StringsObjects1.length = 0;
gdjs.MainmenuCode.GDSilent_9595StringsObjects2.length = 0;
gdjs.MainmenuCode.GDbyObjects1.length = 0;
gdjs.MainmenuCode.GDbyObjects2.length = 0;
gdjs.MainmenuCode.GDPlayObjects1.length = 0;
gdjs.MainmenuCode.GDPlayObjects2.length = 0;
gdjs.MainmenuCode.GDSaveObjects1.length = 0;
gdjs.MainmenuCode.GDSaveObjects2.length = 0;


return;

}

gdjs['MainmenuCode'] = gdjs.MainmenuCode;
