(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["camera"],{4141:function(t,a,e){},"667f":function(t,a,e){"use strict";var r=e("4141"),n=e.n(r);n.a},"6ec0":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"camera"},[e("v-btn",{staticClass:"mt-6 camera-back-btn",attrs:{absolute:"",left:"",fab:"",color:"darkgray",elevation:"10"},on:{click:t.backHome}},[e("v-icon",[t._v("mdi-close")])],1),e("v-btn",{staticClass:"mt-6 camera-capture-btn",attrs:{absolute:"",fab:"",color:"darkgray",elevation:"10"},on:{click:t.captureImage}},[e("v-icon",[t._v("mdi-camera")])],1),e("v-btn",{staticClass:"mt-6 camera-switch-btn",attrs:{absolute:"",fab:"",right:"",color:"darkgray",elevation:"10"},on:{click:t.switchCamera}},[e("v-icon",[t._v("mdi-camera-switch")])],1)],1)},n=[],i=e("3b38"),c={name:"upload",data:function(){return{imgSrc:null}},computed:{imageSource:function(){return"data:image/jpeg;base64,".concat(i["a"].capturedImage)}},mounted:function(){setTimeout((function(){document.body.classList.add("transparent")}),300),this.requestStream(),document.getElementsByTagName()},beforeDestroy:function(){document.body.classList.remove("transparent")},methods:{backHome:function(){this.stopStream(),this.$router.push("/")},switchCamera:function(){CameraPreview.switchCamera()},initCamera:function(){this.requestStream()},requestStream:function(){var t=this;if(void 0!==cordova){var a=cordova.plugins.permissions;a.requestPermission(a.CAMERA,(function(a){a.hasPermission?t.startStream():t.$emit("errorMsg","Kamera-Berechtigung fehlt")}),(function(){t.$emit("errorMsg","Kamera-Berechtigung fehlt")}))}else t.startStream()},onCameraFeedPlaying:function(){this.cameraLoading&&(this.sheet=!0,this.cameraLoading=!1)},startStream:function(t){CameraPreview.startCamera({x:0,y:56,width:window.screen.width,toBack:!0,tapFocus:!0,previewDrag:!1,camera:t})},stopStream:function(){CameraPreview.stopCamera()},captureImage:function(){var t=this;CameraPreview.takePicture({width:640,height:640,quality:85},(function(a){t.stopStream(),i["a"].setCapturedImage("data:image/jpeg;base64,".concat(a)),t.$router.push("/upload")}),(function(a){t.$emit("errorMsg","Fehler: ".concat(a))}))}}},o=c,s=(e("667f"),e("2877")),m=e("6544"),u=e.n(m),l=e("8336"),d=e("132d"),f=Object(s["a"])(o,r,n,!1,null,"7420e338",null);a["default"]=f.exports;u()(f,{VBtn:l["a"],VIcon:d["a"]})}}]);
//# sourceMappingURL=camera.1cb96d33.js.map