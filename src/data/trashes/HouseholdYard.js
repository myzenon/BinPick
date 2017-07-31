export default HouseholdYard = {
    name: {
        en: 'yard & household',
        th: 'ลานบ้านและครัวเรือน'
    },
    image: require('../../images/trashes/householdYard/householdYard.jpg'),
    products: [
        {
            name: {
                en: 'animal waste',
                th: 'ขยะจากสัตว์'
            },
            image: require('../../images/trashes/householdYard/product/animalWaste/animalWaste.jpg'),
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
                en: 'dirt & dust',
                th: 'ดินและฝุ่น'
            },
            image: require('../../images/trashes/householdYard/product/dirtDust/dirt.jpg'),
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
                en: 'flower & weeds',
                th: 'ดอกไม้และวัชพืช'
            },
            image: require('../../images/trashes/householdYard/product/flower/bouquet.jpg'),
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
                en: 'grass & leaves',
                th: 'หญ้าและใบไม้'
            },
            image: require('../../images/trashes/householdYard/product/leaves/leaves.jpg'),
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
                en: 'twigs',
                th: 'กิ่งไม้'
            },
            image: require('../../images/trashes/householdYard/product/twigs/twigs.jpg'),
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
