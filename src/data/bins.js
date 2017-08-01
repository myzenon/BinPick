export default {
    general: {
        name: {
            en: 'General',
            th: 'ขยะทั่วไป'
        },
        color: {
            en: 'Blue',
            th: 'สีฟ้า'
        },
        hexColor: '#1E88E5',
        image: require('../images/bins/Blue.png'),
        image2: {
            open: require('../images/bins/open-close/blue-open.png'),
            close: require('../images/bins/open-close/blue-close.png')
        },
        description: {
            en: 'The general waste bin is for any waste that you cannot put into your recycle, conpostable or Hazardous bins.',
            th: 'ถังขยะทั่วไปเป็นถังสำหรับทิ้งขยะที่ไม่สามารถทิ้งลงในถังขยะรีไซเคิล ขยะเปียก หรือขยะอันตรายได้'
        },
        trashList: [
            {
                en: 'used plastic container',
                th: 'พลาสติกที่ใส่อาหารแล้ว'
            },
            {
                en: 'straw',
                th: 'หลอด'
            },
            {
                en: 'candy bag',
                th: 'ซองลูกอม'
            },
            {
                en: 'snack bag',
                th: 'ซองขนม'
            },
            {
                en: 'instant noodle bag',
                th: 'ซองบะหมี่'
            },
            {
                en: 'tissue paper',
                th: 'กระดาษทิชชู่'
            },
            {
                en: 'food box',
                th: 'กล่องอาหาร'
            },
            {
                en: 'foam box',
                th: 'กล่องโฟม'
            },
                        {
                en: 'paper cup',
                th: 'แก้วกระดาษใส่เครื่องดื่ม'
            },
                        {
                en: 'instant noodle cup',
                th: 'มาม่าคัพ'
            },
                        {
                en: 'cloth',
                th: 'เศษผ้า'
            }
        ]
    },
    compostable: {
        name: {
            en: 'Compostable',
            th: 'ขยะเปียก'
        },
        color: {
            en: 'Green',
            th: 'สีเขียว'
        },
        hexColor: '#388E3C',
        image: require('../images/bins/Green.png'),
        image2: {
            open: require('../images/bins/open-close/green-open.png'),
            close: require('../images/bins/open-close/green-close.png')
        },
        description: {
            en: 'The compostable bin used to contain biodegradable waste or compostable materials as a means to divert waste from landfills.',
            th: 'ถังขยะเปียกเป็นถังสำหรับทิ้งขยะที่สามารถย่อยสลายได้ตามธรรมชาติเพื่อเป็นการแยกเพื่อลดจำนวนขยะที่ต้องนำไปฝังกลบ'
        },
        trashList: [
            {
                en: 'food waste',
                th: 'พลาสติกที่ใส่อาหารแล้ว'
            },
            {
                en: 'fruit and vegetable',
                th: 'ผักและผลไม้'
            },
            {
                en: 'peels',
                th: 'เปลือกผลไม้'
            },
            {
                en: 'cloth',
                th: 'เศษผ้า'
            },
            {
                en: 'meats',
                th: 'เศษเนื้อสัตว์'
            }
        ]
    },
    recycle: {
        name: {
            en: 'Recycle',
            th: 'ขยะรีไซเคิล'
        },
        color: {
            en: 'Yellow',
            th: 'สีเหลือง'
        },
        hexColor: '#FFCA28',
        image: require('../images/bins/Yellow.png'),
        image2: {
            open: require('../images/bins/open-close/yellow-open.png'),
            close: require('../images/bins/open-close/yellow-close.png')
        },
        description: {
            en: 'Recycle bin contains the recyclable wastes. Recycling reduces the volume of waste sent to landfill and plays an important part in preserving the quality of the environment.',
            th: 'ถังขยะรีไซเคิลเป็นถังสำหรับทิ้งขยะรีไซเคิล การรีไซเคิลช่วยลดจำนวนขยะที่ต้องนำไปฝังกลบและเป็นส่วนสำคัญของการอนุรักษ์สิ่งแวดล้อม'
        },
        trashList: [
            {
                en: 'empty plastic bottle',
                th: 'ขวดพลาสติกเปล่า'
            },
            {
                en: 'empty plastic cup',
                th: 'แก้วพลาสติกเปล่า'
            },
            {
                en: 'empty glass bottle',
                th: 'ขวดแก้วเปล่า'
            },
            {
                en: 'broken glass',
                th: 'เศษแก้ว'
            },
            {
                en: 'empty can',
                th: 'กระป๋องน้ำอัดลมเปล่า'
            },
            {
                en: 'metal',
                th: 'โลหะ'
            },
            {
                en: 'empty beverage container',
                th: 'กล่องเครื่องดื่มเปล่า'
            },
            {
                en: 'piece of paper',
                th: 'เศษกระดาษ'
            },
            {
                en: 'plastic bag',
                th: 'ถุงก๊อบแก๊บ'
            }
        ]
    },
    hazardous: {
        name: {
            en: 'Hazardous',
            th: 'ขยะอันตราย'
        },
        color: {
            en: 'Red',
            th: 'สีเเดง'
        },
        hexColor: '#C62828',
        image: require('../images/bins/Red.png'),
        image2: {
            open: require('../images/bins/open-close/red-open.png'),
            close: require('../images/bins/open-close/red-close.png')
        },
        description: {
            en: 'The hazardous bin contains any material that cannot be used further or is unwanted, and poses a risk to the community or to the environment if not properly handled.',
            th: 'ถังขยะอันตรายเป็นถังสำหรับทิ้งขยะที่ไม่สามารถนำไปใช้ต่อได้หรือไม่เป็นที่ต้องการและยังอาจจะทำให้เกิดอันตรายต่อสังคมหรือสิ่งแวดล้อมหากไม่ได้รับการจัดการที่เหมาะสม'
        },
        trashList: [
            {
                en: 'hazardous container',
                th: 'ภาชนะบรรจุสารอันตราย'
            },
            {
                en: 'cleaning solution',
                th: 'น้ำยาทำความสะอาด'
            },
            {
                en: 'insecticide',
                th: 'ยาฆ่าแมลง'
            },
            {
                en: 'thinner',
                th: 'ทินเนอร์'
            },
            {
                en: 'expired medicine',
                th: 'ยาหมดอายุ'
            },
            {
                en: 'cosmetics',
                th: 'เครื่องสำอางค์'
            },
            {
                en: 'engine oils',
                th: 'น้ำมันเครื่อง'
            },
            {
                en: 'light bulb/ fluorescent',
                th: 'หลอดไฟ/หลอดฟลูออเรสเซนต์'
            },
            {
                en: 'battery',
                th: 'ถ่านไฟฉาย'
            },
            {
                en: 'car battery',
                th: 'แบตเตอรี่รถยนต์'
            }
        ]
    }
}
