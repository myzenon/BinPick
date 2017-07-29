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
        }
    ]
}
