export default Paper = { 
    name: {
        en: 'paper',
        th: 'กระดาษ'
    },
    image: require('../../images/trashes/paper/paper.jpg'),
    products: [
        {
            name: {
                en: 'tissue',
                th: 'ทิชชู่'
            },
            image: require('../../images/trashes/paper/product/tissue/tissue.jpg'),
            bins: [
                'general',
                'compostable',
                'recycle',
                'hazardous'
            ], 
            tips: [ ]
        },{
            name: {
                en: 'envelope',
                th: 'ซองจดหมาย'
            },
            image: require('../../images/trashes/paper/product/envelope/envelope.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        },{
            name: {
                en: 'flyer',
                th: 'ใบปลิว'
            },
            image: require('../../images/trashes/paper/product/flyer/flyer.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        },{
            name: {
                en: 'paper plate',
                th: 'จานกระดาษ'
            },
            image: require('../../images/trashes/paper/product/paperPlate/paperPlate.jpg'),
            bins: [
                'compostable',
                'general',
                'recycle',
                'hazardous'
            ], 
            tips: [ 
                {
                    detail: {
                        en: 'Food scrap should be seperated to the green bin.',
                        th: 'เศษอาหารควรแยกทิ้งในถังสีเขียว'
                    },
                    image: require('../../images/trashes/paper/product/paperPlate/tip/1/greenBin.jpg')
                }
            ]
        },{
            name: {
                en: 'snack box',
                th: 'กล่องใส่ขนม'
            },
            image: require('../../images/trashes/paper/product/snackBox/snackBox.jpg'),
            bins: [
                'compostable',
                'general',
                'recycle',
                'hazardous'
            ], 
             tips: [ ]
        },{
            name: {
                en: 'detergent box',
                th: 'กล่องผงซักฟอก'
            },
            image: require('../../images/trashes/paper/product/detergentBox/detergentBox.jpg'),
            bins: [
                'compostable',
                'general',
                'recycle',
                'hazardous'
            ], 
             tips: [ ]
        },{
            name: {
                en: 'book',
                th: 'หนังสือ'
            },
            image: require('../../images/trashes/paper/product/book/book.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        }
    ]
}

