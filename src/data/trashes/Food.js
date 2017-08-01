export default Food = {
    name: {
        en: 'food',
        th: 'อาหาร'
    },
    image: require('../../images/trashes/food/food.jpg'),
    products: [
        {
            name: {
                en: 'fruit & vegetable',
                th: 'ผักและผลไม้'
            },
            image: require('../../images/trashes/food/product/fruitVege/fruitVege.jpg'),
            bins: [
                'compostable',
                'general',
                'hazardous',
                'recycle'
            ], 
            tips: [ ]
        }, {
            name: {
                en: 'bread',
                th: 'ขนมปัง'
            },
            image: require('../../images/trashes/food/product/bread/bread.jpg'),
            bins: [
                'compostable',
                'general',
                'hazardous',
                'recycle'
            ], 
            tips: [ ]
        },{
            name: {
                en: 'food scraps',
                th: 'เศษอาหาร'
            },
            image: require('../../images/trashes/food/product/foodScraps/foodScraps.jpg'),
            bins: [
                'compostable',
                'general',
                'hazardous',
                'recycle'
            ], 
            tips: [ ]
        },   
        {
            name: {
                en: 'meat',
                th: 'เนื้อสัตว์'
            },
            image: require('../../images/trashes/food/product/meat/meat.jpg'),
            bins: [
                'compostable',
                'general',
                'hazardous',
                'recycle'
            ], 
            tips: [ ]
        },   
        {
            name: {
                en: 'beverage',
                th: 'เครื่องดื่ม'
            },
            image: require('../../images/trashes/food/product/beverage/beverage.jpg'),
            bins: [
                'recycle',
                'general',
                'hazardous',
                'compostable'
            ], 
            tips: [ 
                {
                    detail: {
                        en: 'Make it empty before throwing it into the bin',
                        th: 'ล้างให้สะอาดก่อนทิ้ง'
                    },
                    image: require('../../images/trashes/food/product/beverage/tip/1/empty.png')
                }
             ]
        },   
        {
            name: {
                en: 'instant noodle',
                th: 'บะหมี่กึ่งสำเร็จรูป'
            },
            image: require('../../images/trashes/food/product/instantNoodle/instantNoodle.jpg'),
            bins: [
                'general',
                'recycle',
                'compostable',
                'hazardous'
            ], 
            tips: [ ]
        }
    ]
}
