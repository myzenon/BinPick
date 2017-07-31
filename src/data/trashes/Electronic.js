export default Electronic = { 
    name: {
        en: 'electronic',
        th: 'อิเล็กทรอนิกส์'
    },
    image: require('../../images/trashes/electronic/electronic.jpg'),
    products: [
        {
            name: {
                en: 'light bulb',
                th: 'หลอดไฟ'
            },
            image: require('../../images/trashes/electronic/product/lightBulb/lightBulb.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: [ 
                {
                    detail: {
                        en: 'The fragiled bulb should be covered with a paper or a bag',
                        th: 'หลอดที่แตกควรห่อไว้ด้วยกระดาษหรือใส่ไว้ในถุง'
                    },
                    image: require('../../images/trashes/electronic/product/lightBulb/tip/1/brokenBulb.jpg')
                }
            ]
        },
        {
            name: {
                en: 'battery',
                th: 'ถ่าน'
            },
            image: require('../../images/trashes/electronic/product/battery/battery.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: [ 
                {
                    detail: {
                        en: 'put the battery in the plastic bag before throw it in the bin to avoid the explosion from wet.',
                        th: 'ใส่ไว้ในถุงพลาสติกก่อนทิ้งเพื่อป้องกันการระเบิดจากการเปียกน้ำ'
                    },
                    image: require('../../images/trashes/electronic/product/battery/tip/1/batteryBurst.jpg')
                }
            ]
        },
        {
            name: {
                en: 'wire',
                th: 'สายไฟ'
            },
            image: require('../../images/trashes/electronic/product/wire/wire.png'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
        // {
        //     name: {
        //         en: 'calculator',
        //         th: 'เครื่องคิดเลข'
        //     },
        //     image: require('../../images/trashes/electronic/product/calculator/calculator.jpeg'),
        //     bins: [
        //         'hazardous',
        //         'general',
        //         'recycle',
        //         'compostable'
        //     ], 
        //     tips: []
        // },
        {
            name: {
                en: 'CD',
                th: 'แผ่นซีดี'
            },
            image: require('../../images/trashes/electronic/product/cd/cd.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
        // {
        //     name: {
        //         en: 'clock',
        //         th: 'นาฬิกา'
        //     },
        //     image: require('../../images/trashes/electronic/product/clock/clock.jpg'),
        //     bins: [
        //         'hazardous',
        //         'general',
        //         'recycle',
        //         'compostable'
        //     ], 
        //     tips: []
        // },
        {
            name: {
                en: 'small device',
                th: 'อุปกรณ์ขนาดเล็ก'
            },
            image: require('../../images/trashes/electronic/product/smallDevice/smallDevice.png'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
    ]
}
