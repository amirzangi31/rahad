import Back from "@/icons/iconsSidebar/Back"
import Esterdad from "@/icons/iconsSidebar/Esterdad"
import Front from "@/icons/iconsSidebar/Front"
import Kahdamat from "@/icons/iconsSidebar/Kahdamat"
import Online from "@/icons/iconsSidebar/Online"
import Poshtiban from "@/icons/iconsSidebar/Poshtiban"
import Search from "@/icons/iconsSidebar/Search"
import Settings from "@/icons/iconsSidebar/Settings"

const sidebarData = [
    {
        name : "فرانت آفیس",
        link : "/",
        drop : true,
        children : [
            {
                name : "فرانت آفیس",
                link : "/",
                drop : false
            }
        ],
        icon : <Front /> 
    },
    {
        name : "بک آفیس",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Back />
    },
    {
        name : "خدمات جانبی",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Kahdamat />
    },
    {
        name : "تنظیمات",
        link : "/",
        drop : true,
        children : [
            {
                name : "تعریف اقامتگاه",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "تعریف اتاق",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "مشخصات عمومی",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "امکانات اقامتگاه  ",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "امکانات اتاق    ",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : " امکانات هتل",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : " تعریف قیمت  ",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : " تعریف قیمت مهمان خارجی ",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "تعریف قیمت خدمات و خدمات گردشگری",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "تعریف کاربر",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "سطح دسترسی ",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "آژانسها و سازمانهای قراردادی",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "گارانتی",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "تعریف واچر",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "تعریف پیامک",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "لوکیشن هتل",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "قوانین و مقررات",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "هتل های زنجیره ای",
                link : "/settings/createresidency",
                drop : false
            },
            {
                name : "تغییر زبان",
                link : "/settings/createresidency",
                drop : false
            },
        ],
        icon : <Settings />
    },
    {
        name : "پشتیبان گیری",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Poshtiban />
    },
    {
        name : "پشتیبانی آنلاین",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Online />
    },
    
    {
        name : "جستجوی پیشرفته ",
        link : "/",
        icon : <Search /> 
    },
    {
        name : "استرداد",
        link : "/",
        icon : <Esterdad /> 
    }
]


export default sidebarData



 



