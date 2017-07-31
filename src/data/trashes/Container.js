export default Container = { 
    name: {
        en: 'container',
        th: 'บรรจุภัณฑ์'
    },
    image: require('../../images/trashes/container/container.jpg'),
    products: [
        {
            name: {
                en: 'milk carton',
                th: 'กล่องนม'
            },
            image: require('../../images/trashes/container/product/milkCarton/milkCarton.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ 
                {
                    detail: {
                        en: 'Seperate the cap before throwing.',
                        th: 'แยกฝาออกจากกล่องก่อนนำไปทิ้ง'
                    },
                    image: require('../../images/trashes/container/product/milkCarton/tip/1/noCap.jpg')
                }
            ]
        },
        {
            name: {
                en: 'can',
                th: 'กระป๋อง'
            },
            image: require('../../images/trashes/container/product/can/can.png'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        },
        {
            name: {
                en: 'foil tray',
                th: 'ถาดฟอยล์'
            },
            image: null,
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        },
        {
            name: {
                en: 'glass bottle',
                th: 'ขวดแก้ว'
            },
            image: require('../../images/trashes/container/product/glassBottle/glassBottle.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        },
        {
            name: {
                en: 'glass jar',
                th: 'ขวดโหลแก้ว'
            },
            image: require('../../images/trashes/container/product/glassJar/glassJar.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
            tips: [ 
                 {
                    detail: {
                        en: 'Please remove the lid before put it in the bin.',
                        th: 'นำฝาปิดออกก่อนทิ้งลงถัง'
                    },
                    image: require('../../images/trashes/container/product/glassJar/tip/1/jarLid.jpg')
                }
            ]
        },
        {
            name: {
                en: 'plastic bag',
                th: 'ถุงพลาสติก'
            },
            image: require('../../images/trashes/container/product/plasticBag/plasticBag.jpg'),
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
             tips: [ 
                {
                    detail: {
                        en: 'The plastic bag should be empty.',
                        th: 'ถุงที่จะทิ้งควรเป็นถุงเปล่า'
                    },
                    image: require('../../images/trashes/container/product/plasticBag/tip/1/emptyBag.jpg')
                }
             ]
        },
        {
            name: {
                en: 'plastic container',
                th: 'บรรจุภัณฑ์พลาสติก'
            },
            image: null,
            bins: [
                'recycle',
                'general',
                'compostable',
                'hazardous'
            ], 
             tips: [ 
                 {
                    detail: {
                        en: 'The plastic container should be empty.',
                        th: 'บรรจุภัณฑ์ที่จะทิ้งควรเป็นบรรจุภัณฑ์ที่ว่างเปล่า'
                    },
                    image: require('../../images/trashes/container/product/plasticContainer/tip/1/emptyContainer.jpg')
                }
             ]
        },
            {
            name: {
                en: 'foam container',
                th: 'บรรจุภัณฑ์โฟม'
            },
            image: require('../../images/trashes/container/product/foamContainer/foamContainer.jpg'),
            bins: [
                'general',
                'compostable',
                'recycle',
                'hazardous'
            ], 
             tips: [ ]
        },
        {
            name: {
                en: 'plastic bottle',
                th: 'ขวดพลาสติก'
            },
            image: require('../../images/trashes/container/product/plasticBottle/plasticBottle.jpg'),
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

