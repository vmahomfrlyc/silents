gdjs.level3goCode = {};
gdjs.level3goCode.localVariables = [];
gdjs.level3goCode.GDbg2Objects1= [];
gdjs.level3goCode.GDbg2Objects2= [];
gdjs.level3goCode.GDNewTextObjects1= [];
gdjs.level3goCode.GDNewTextObjects2= [];
gdjs.level3goCode.GDtitleObjects1= [];
gdjs.level3goCode.GDtitleObjects2= [];
gdjs.level3goCode.GDmainmenuObjects1= [];
gdjs.level3goCode.GDmainmenuObjects2= [];
gdjs.level3goCode.GDrestartObjects1= [];
gdjs.level3goCode.GDrestartObjects2= [];


gdjs.level3goCode.mapOfGDgdjs_9546level3goCode_9546GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.level3goCode.GDtitleObjects1});
gdjs.level3goCode.mapOfGDgdjs_9546level3goCode_9546GDmainmenuObjects1Objects = Hashtable.newFrom({"mainmenu": gdjs.level3goCode.GDmainmenuObjects1});
gdjs.level3goCode.mapOfGDgdjs_9546level3goCode_9546GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.level3goCode.GDrestartObjects1});
gdjs.level3goCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.level3goCode.GDtitleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level3goCode.mapOfGDgdjs_9546level3goCode_9546GDtitleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.level3goCode.GDmainmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level3goCode.mapOfGDgdjs_9546level3goCode_9546GDmainmenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mainmenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.level3goCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level3goCode.mapOfGDgdjs_9546level3goCode_9546GDrestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.level3goCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level3goCode.GDbg2Objects1.length = 0;
gdjs.level3goCode.GDbg2Objects2.length = 0;
gdjs.level3goCode.GDNewTextObjects1.length = 0;
gdjs.level3goCode.GDNewTextObjects2.length = 0;
gdjs.level3goCode.GDtitleObjects1.length = 0;
gdjs.level3goCode.GDtitleObjects2.length = 0;
gdjs.level3goCode.GDmainmenuObjects1.length = 0;
gdjs.level3goCode.GDmainmenuObjects2.length = 0;
gdjs.level3goCode.GDrestartObjects1.length = 0;
gdjs.level3goCode.GDrestartObjects2.length = 0;

gdjs.level3goCode.eventsList0(runtimeScene);
gdjs.level3goCode.GDbg2Objects1.length = 0;
gdjs.level3goCode.GDbg2Objects2.length = 0;
gdjs.level3goCode.GDNewTextObjects1.length = 0;
gdjs.level3goCode.GDNewTextObjects2.length = 0;
gdjs.level3goCode.GDtitleObjects1.length = 0;
gdjs.level3goCode.GDtitleObjects2.length = 0;
gdjs.level3goCode.GDmainmenuObjects1.length = 0;
gdjs.level3goCode.GDmainmenuObjects2.length = 0;
gdjs.level3goCode.GDrestartObjects1.length = 0;
gdjs.level3goCode.GDrestartObjects2.length = 0;


return;

}

gdjs['level3goCode'] = gdjs.level3goCode;
