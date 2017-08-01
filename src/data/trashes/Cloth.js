export default Cloth = { 
    name: {
        en: 'cloth',
        th: 'ผ้า'
    },
    image: require('../../images/trashes/cloth/cloth.jpg'),
    products: [ 
        {
            name: {
                en: 'clothes',
                th: 'เสื้อผ้า'
            },
            image: require('../../images/trashes/cloth/product/clothes/clothes.jpg'),
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
                en: 'rag',
                th: 'ผ้าขี้ริ้ว'
            },
            image: require('../../images/trashes/cloth/product/rag/rag.jpg'),
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
                en: 'socks',
                th: 'ถุงเท้า'
            },
            image: require('../../images/trashes/cloth/product/socks/socks.jpg'),
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
                en: 'bag',
                th: 'กระเป๋า'
            },
            image: require('../../images/trashes/cloth/product/bag/bag.jpg'),
            bins: [
                'general',
                'compostable',
                'recycle',
                'hazardous'
            ], 
            tips: [ ]
        }
    ]
}
