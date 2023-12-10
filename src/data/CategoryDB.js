import Top from '../images/women/top5.jpg';
import Dress from '../images/women/dress4.jpg';
import Denim from '../images/women/denim1.jpg';
import Sweter from '../images/women/sweter1.jpg';

import Shirt from '../images/men/shirt2.jpg';
import DenimM from '../images/men/denim5.jpg';
import Formal from '../images/men/formal1.jpg';
import Hoodie from '../images/men/hoodie2.jpg';

import Womenbanner from '../images/women/bannerwomen2.jpg';
import Menbanner from '../images/men/menbanner.jpg';

export const CategoryDB = [
    {
        id:1,
        categoryName: "Western wear",
        categoryType: "top",
        category: "women",
        categoryImg: Top
    },
    {
        id:2,
        categoryName: "Dresses",
        categoryType: "dress",
        category: "women",
        categoryImg: Dress
    },
    {
        id:3,
        categoryName: "Denims",
        categoryType: "denim",
        category: "women",
        categoryImg: Denim
    },
    {
        id:4,
        categoryName: "Cold wear",
        categoryType: "sweter",
        category: "women",
        categoryImg: Sweter
    },
    {
        id:5,
        categoryName: "Casual wear",
        categoryType: "shirt",
        category: "men",
        categoryImg: Shirt
    },
    {
        id:6,
        categoryName: "Formal wear",
        categoryType: "formal",
        category: "men",
        categoryImg: Formal
    },
    {
        id:7,
        categoryName: "Denims",
        categoryType: "mendenim",
        category: "men",
        categoryImg: DenimM
    },
    {
        id:8,
        categoryName: "Hoodies",
        categoryType: "hoodie",
        category: "men",
        categoryImg: Hoodie
    }
]

export const BannerContenet = [
    {
        id : 1,
        image : Womenbanner,
        title : "Women studio",
        category: "women"
    },
    {
        id : 2,
        image : Menbanner,
        title : "Men studio",
        category: "men"
    }

]