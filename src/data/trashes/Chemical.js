export default Chemical = { 
    name: {
        en: 'chemical',
        th: 'สารเคมี'
    },
    image: require('../../images/trashes/chemical/chemical.jpg'),
    products: [ 
        {
            name: {
                en: 'cosmetic',
                th: 'เครื่องสำอางค์'
            },
            image: require('../../images/trashes/chemical/product/cosmetic/cosmetic.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        }, 
        {
            name: {
                en: 'cleaning solution',
                th: 'น้ำยาทำความสะอาด'
            },
            image: require('../../images/trashes/chemical/product/cleaningSolution/cleaningSolution.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
        {
            name: {
                en: 'medicine',
                th: 'ยา'
            },
            image: require('../../images/trashes/chemical/product/medicine/medicine.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
        {
            name: {
                en: 'insecticide',
                th: 'ยาฆ่าแมลง'
            },
            image: require('../../images/trashes/chemical/product/insecticide/insecticide.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
        {
            name: {
                en: 'shampoo',
                th: 'แชมพู'
            },
            image: require('../../images/trashes/chemical/product/shampoo/shampoo.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        },
        {
            name: {
                en: 'soap',
                th: 'สบู่'
            },
            image: require('../../images/trashes/chemical/product/soap/soap.jpg'),
            bins: [
                'hazardous',
                'general',
                'recycle',
                'compostable'
            ], 
            tips: []
        }
    ]
}
