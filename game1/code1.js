gdjs.level1Code = {};
gdjs.level1Code.localVariables = [];
gdjs.level1Code.GDbg1Objects1= [];
gdjs.level1Code.GDbg1Objects2= [];
gdjs.level1Code.GDmcObjects1= [];
gdjs.level1Code.GDmcObjects2= [];
gdjs.level1Code.GDbug1Objects1= [];
gdjs.level1Code.GDbug1Objects2= [];
gdjs.level1Code.GDbug2Objects1= [];
gdjs.level1Code.GDbug2Objects2= [];
gdjs.level1Code.GDbug3Objects1= [];
gdjs.level1Code.GDbug3Objects2= [];


gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDmcObjects1Objects = Hashtable.newFrom({"mc": gdjs.level1Code.GDmcObjects1});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDbug1Objects1ObjectsGDgdjs_9546level1Code_9546GDbug2Objects1ObjectsGDgdjs_9546level1Code_9546GDbug3Objects1Objects = Hashtable.newFrom({"bug1": gdjs.level1Code.GDbug1Objects1, "bug2": gdjs.level1Code.GDbug2Objects1, "bug3": gdjs.level1Code.GDbug3Objects1});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDbug1Objects1ObjectsGDgdjs_9546level1Code_9546GDbug2Objects1ObjectsGDgdjs_9546level1Code_9546GDbug3Objects1Objects = Hashtable.newFrom({"bug1": gdjs.level1Code.GDbug1Objects1, "bug2": gdjs.level1Code.GDbug2Objects1, "bug3": gdjs.level1Code.GDbug3Objects1});
gdjs.level1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("mc"), gdjs.level1Code.GDmcObjects1);
{for(var i = 0, len = gdjs.level1Code.GDmcObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDmcObjects1[i].addForce(300, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("mc"), gdjs.level1Code.GDmcObjects1);
{for(var i = 0, len = gdjs.level1Code.GDmcObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDmcObjects1[i].addForce(-(300), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bug1"), gdjs.level1Code.GDbug1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bug2"), gdjs.level1Code.GDbug2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bug3"), gdjs.level1Code.GDbug3Objects1);
gdjs.copyArray(runtimeScene.getObjects("mc"), gdjs.level1Code.GDmcObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDmcObjects1Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDbug1Objects1ObjectsGDgdjs_9546level1Code_9546GDbug2Objects1ObjectsGDgdjs_9546level1Code_9546GDbug3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level3go", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "bugsgentime", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.level1Code.GDbug1Objects1.length = 0;

gdjs.level1Code.GDbug2Objects1.length = 0;

gdjs.level1Code.GDbug3Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDbug1Objects1ObjectsGDgdjs_9546level1Code_9546GDbug2Objects1ObjectsGDgdjs_9546level1Code_9546GDbug3Objects1Objects, "bug" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(10, 1080), 10, "");
}{for(var i = 0, len = gdjs.level1Code.GDbug1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug1Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 1));
}
for(var i = 0, len = gdjs.level1Code.GDbug2Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 1));
}
for(var i = 0, len = gdjs.level1Code.GDbug3Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug3Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.5, 1));
}
}{for(var i = 0, len = gdjs.level1Code.GDbug1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.level1Code.GDbug2Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.level1Code.GDbug3Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.level1Code.GDbug1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug1Objects1[i].addPolarForce(90, 500, 1);
}
for(var i = 0, len = gdjs.level1Code.GDbug2Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug2Objects1[i].addPolarForce(90, 500, 1);
}
for(var i = 0, len = gdjs.level1Code.GDbug3Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug3Objects1[i].addPolarForce(90, 500, 1);
}
}{for(var i = 0, len = gdjs.level1Code.GDbug1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.level1Code.GDbug2Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.level1Code.GDbug3Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDbug3Objects1[i].rotate(90, runtimeScene);
}
}}

}


};

gdjs.level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1Code.GDbg1Objects1.length = 0;
gdjs.level1Code.GDbg1Objects2.length = 0;
gdjs.level1Code.GDmcObjects1.length = 0;
gdjs.level1Code.GDmcObjects2.length = 0;
gdjs.level1Code.GDbug1Objects1.length = 0;
gdjs.level1Code.GDbug1Objects2.length = 0;
gdjs.level1Code.GDbug2Objects1.length = 0;
gdjs.level1Code.GDbug2Objects2.length = 0;
gdjs.level1Code.GDbug3Objects1.length = 0;
gdjs.level1Code.GDbug3Objects2.length = 0;

gdjs.level1Code.eventsList0(runtimeScene);
gdjs.level1Code.GDbg1Objects1.length = 0;
gdjs.level1Code.GDbg1Objects2.length = 0;
gdjs.level1Code.GDmcObjects1.length = 0;
gdjs.level1Code.GDmcObjects2.length = 0;
gdjs.level1Code.GDbug1Objects1.length = 0;
gdjs.level1Code.GDbug1Objects2.length = 0;
gdjs.level1Code.GDbug2Objects1.length = 0;
gdjs.level1Code.GDbug2Objects2.length = 0;
gdjs.level1Code.GDbug3Objects1.length = 0;
gdjs.level1Code.GDbug3Objects2.length = 0;


return;

}

gdjs['level1Code'] = gdjs.level1Code;
