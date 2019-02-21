const image_src = '../../static/images/yashou.jpg'
Page({
    data:{
        image_src,
        wrap_style: `background-image: url(${image_src})`
    },
    onLoad(){
        const db = wx.cloud.database()
        db.collection('tapMe').get()
            .then(res => {
                console.log(res);
            })
    },
    toright(e:any){
        console.log(e,'move');
    },
    tochange(e:any){
        console.log(e,'change');
    }
})