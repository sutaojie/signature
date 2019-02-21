"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        }
        else {
            wx.cloud.init({
                traceUser: true,
            });
            console.log('loading yun');
        }
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFTO0lBQ1YsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1NBQ3pDO2FBQU07WUFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELFVBQVUsRUFBRSxFQUNYO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAudHNcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrPyhyZXM6IHd4LlVzZXJJbmZvKTogdm9pZFxuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm8/OiB3eC5Vc2VySW5mb1xuICB9XG59XG5cbkFwcDxJTXlBcHA+KHtcbiAgb25MYXVuY2goKSB7XG4gICAgaWYgKCF3eC5jbG91ZCkge1xuICAgICAgY29uc29sZS5lcnJvcign6K+35L2/55SoIDIuMi4zIOaIluS7peS4iueahOWfuuehgOW6k+S7peS9v+eUqOS6keiDveWKmycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LmNsb3VkLmluaXQoe1xuICAgICAgICB0cmFjZVVzZXI6IHRydWUsXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgeXVuJyk7XG4gICAgfVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gIH1cbn0pIl19