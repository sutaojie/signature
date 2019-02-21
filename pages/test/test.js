"use strict";
var image_src = '../../static/images/yashou.jpg';
Page({
    data: {
        image_src: image_src,
        wrap_style: "background-image: url(" + image_src + ")"
    },
    onLoad: function () {
        var db = wx.cloud.database();
        db.collection('tapMe').get()
            .then(function (res) {
            console.log(res);
        });
        console.log(11);
    },
    toright: function (e) {
        console.log(e, 'move');
    },
    tochange: function (e) {
        console.log(e, 'change');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sU0FBUyxHQUFHLGdDQUFnQyxDQUFBO0FBQ2xELElBQUksQ0FBQztJQUNELElBQUksRUFBQztRQUNELFNBQVMsV0FBQTtRQUNULFVBQVUsRUFBRSwyQkFBeUIsU0FBUyxNQUFHO0tBQ3BEO0lBQ0QsTUFBTTtRQUNGLElBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDOUIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUU7YUFDdkIsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxPQUFPLFlBQUMsQ0FBSztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxRQUFRLFlBQUMsQ0FBSztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbWFnZV9zcmMgPSAnLi4vLi4vc3RhdGljL2ltYWdlcy95YXNob3UuanBnJ1xyXG5QYWdlKHtcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIGltYWdlX3NyYyxcclxuICAgICAgICB3cmFwX3N0eWxlOiBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2Vfc3JjfSlgXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgY29uc3QgZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSgpXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbigndGFwTWUnKS5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygxMSk7XHJcbiAgICB9LFxyXG4gICAgdG9yaWdodChlOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSwnbW92ZScpO1xyXG4gICAgfSxcclxuICAgIHRvY2hhbmdlKGU6YW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLCdjaGFuZ2UnKTtcclxuICAgIH1cclxufSkiXX0=