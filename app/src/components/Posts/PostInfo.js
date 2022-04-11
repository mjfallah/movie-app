import DuneCover from "../../assets/PostImages/Dune.jpg";
import TheSopranosCover from "../../assets/PostImages/thesopranos.jpg";

const isoString = new Date().toISOString();
const date = new Date(isoString);
const postingDate = new Intl.DateTimeFormat("fa", {
    month: "long",
    day: "numeric",
    year: "numeric"
}).format(date);

export const PostData = [
    {
        id : 1,
        image : DuneCover,
        title : "Dune 2021",
        category : "فیلم",
        rating : "PG-13",
        imdb : {
            rate : 8.2,
            votesCount : 378000,
            top250Imdb : 0
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "علمی و تخیلی" , "ماجراجویی"],
        releaseYear : 2021 ,
        producerCountries : ["مجارستان" , "کانادا" , "آمریکا"],
        director : "Denis Villeneuve",
        actors : ["Jason Momoa" , "Oscar Isaac" , "Rebecca Ferguson" , "Stellan Skarsgård" , "Timothée Chalamet" , "Zendaya"],
        isForcedSubtitle : true ,
        isDubbed : true,
        summary : "اقتباسی ویژه از رمان علمی تخیلی فرانک هربرت، درباره فرزند خانواده ای اصیل که محافظت از ارزشمندترین دارایی و حیاتی ترین عنصر کهکشان را به او سپرده اند...",
        postingDate : postingDate , 
        commentsCount : 158
    }
    ,
    {
        id : 2,
        image : TheSopranosCover,
        title : "The Sopranos",
        category : "سریال",
        rating : "TV-MA",
        imdb : {
            rate : 9.2,
            votesCount : 284501,
            top250Imdb : 15
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "جنایی"],
        releaseYear : 1999 ,
        episodeLength : "55",
        producerCountries : ["آمریکا"],
        airSituation : "finished",
        lastSeasonYear : 2007 ,
        director : "David Chase",
        actors : ["Edie Falco" , "James Gandolfini" , "Lorraine Bracco" , "Michael Imperioli" ],
        isForcedSubtitle : true ,
        isDubbed : false,
        summary : "سریال داستان یک خانواده ایتالیایی است که در نیو جرسی زندگی میکنند که به فعالیت های مافیایی مشغولند. تونی سوپرانو به عنوان رییس گروه مافیایی انتخاب می شود . شخصیت او در خانه پدری است عاطفی و مهربان و دلسوز و در بیرون از خانه یک جنایتکار و بیماری روانی است.",
        update : " قسمت آخر فصل ششم اضافه شد." ,
        postingDate : postingDate , 
        commentsCount : 48
    }
    , 
    {
        id : 3,
        image : DuneCover,
        title : "Dune 2021",
        category : "فیلم",
        rating : "PG-13",
        imdb : {
            rate : 8.2,
            votesCount : 378000,
            top250Imdb : 0
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "علمی و تخیلی" , "ماجراجویی"],
        releaseYear : 2021 ,
        producerCountries : ["مجارستان" , "کانادا" , "آمریکا"],
        director : "Denis Villeneuve",
        actors : ["Jason Momoa" , "Oscar Isaac" , "Rebecca Ferguson" , "Stellan Skarsgård" , "Timothée Chalamet" , "Zendaya"],
        isForcedSubtitle : true ,
        isDubbed : true,
        summary : "اقتباسی ویژه از رمان علمی تخیلی فرانک هربرت، درباره فرزند خانواده ای اصیل که محافظت از ارزشمندترین دارایی و حیاتی ترین عنصر کهکشان را به او سپرده اند...",
        postingDate : postingDate , 
        commentsCount : 158
    }
    ,
    {
        id : 4,
        image : TheSopranosCover,
        title : "The Sopranos",
        category : "سریال",
        rating : "TV-MA",
        imdb : {
            rate : 9.2,
            votesCount : 284501,
            top250Imdb : 15
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "جنایی"],
        releaseYear : 1999 ,
        episodeLength : "55",
        producerCountries : ["آمریکا"],
        airSituation : "finished",
        lastSeasonYear : 2007 ,
        director : "David Chase",
        actors : ["Edie Falco" , "James Gandolfini" , "Lorraine Bracco" , "Michael Imperioli" ],
        isForcedSubtitle : true ,
        isDubbed : false,
        summary : "سریال داستان یک خانواده ایتالیایی است که در نیو جرسی زندگی میکنند که به فعالیت های مافیایی مشغولند. تونی سوپرانو به عنوان رییس گروه مافیایی انتخاب می شود . شخصیت او در خانه پدری است عاطفی و مهربان و دلسوز و در بیرون از خانه یک جنایتکار و بیماری روانی است.",
        update : " قسمت آخر فصل ششم اضافه شد." ,
        postingDate : postingDate , 
        commentsCount : 48
    }
    ,
    {
        id : 5,
        image : DuneCover,
        title : "Dune 2021",
        category : "فیلم",
        rating : "PG-13",
        imdb : {
            rate : 8.2,
            votesCount : 378000,
            top250Imdb : 0
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "علمی و تخیلی" , "ماجراجویی"],
        releaseYear : 2021 ,
        producerCountries : ["مجارستان" , "کانادا" , "آمریکا"],
        director : "Denis Villeneuve",
        actors : ["Jason Momoa" , "Oscar Isaac" , "Rebecca Ferguson" , "Stellan Skarsgård" , "Timothée Chalamet" , "Zendaya"],
        isForcedSubtitle : true ,
        isDubbed : true,
        summary : "اقتباسی ویژه از رمان علمی تخیلی فرانک هربرت، درباره فرزند خانواده ای اصیل که محافظت از ارزشمندترین دارایی و حیاتی ترین عنصر کهکشان را به او سپرده اند...",
        postingDate : postingDate , 
        commentsCount : 158
    }
    ,
    {
        id : 6,
        image : TheSopranosCover,
        title : "The Sopranos",
        category : "سریال",
        rating : "TV-MA",
        imdb : {
            rate : 9.2,
            votesCount : 284501,
            top250Imdb : 15
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "جنایی"],
        releaseYear : 1999 ,
        episodeLength : "55",
        producerCountries : ["آمریکا"],
        airSituation : "finished",
        lastSeasonYear : 2007 ,
        director : "David Chase",
        actors : ["Edie Falco" , "James Gandolfini" , "Lorraine Bracco" , "Michael Imperioli" ],
        isForcedSubtitle : true ,
        isDubbed : false,
        summary : "سریال داستان یک خانواده ایتالیایی است که در نیو جرسی زندگی میکنند که به فعالیت های مافیایی مشغولند. تونی سوپرانو به عنوان رییس گروه مافیایی انتخاب می شود . شخصیت او در خانه پدری است عاطفی و مهربان و دلسوز و در بیرون از خانه یک جنایتکار و بیماری روانی است.",
        update : " قسمت آخر فصل ششم اضافه شد." ,
        postingDate : postingDate , 
        commentsCount : 48
    }
    ,
    {
        id : 7,
        image : DuneCover,
        title : "Dune 2021",
        category : "فیلم",
        rating : "PG-13",
        imdb : {
            rate : 8.2,
            votesCount : 378000,
            top250Imdb : 0
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "علمی و تخیلی" , "ماجراجویی"],
        releaseYear : 2021 ,
        producerCountries : ["مجارستان" , "کانادا" , "آمریکا"],
        director : "Denis Villeneuve",
        actors : ["Jason Momoa" , "Oscar Isaac" , "Rebecca Ferguson" , "Stellan Skarsgård" , "Timothée Chalamet" , "Zendaya"],
        isForcedSubtitle : true ,
        isDubbed : true,
        summary : "اقتباسی ویژه از رمان علمی تخیلی فرانک هربرت، درباره فرزند خانواده ای اصیل که محافظت از ارزشمندترین دارایی و حیاتی ترین عنصر کهکشان را به او سپرده اند...",
        postingDate : postingDate , 
        commentsCount : 158
    }
    ,
    {
        id : 8,
        image : TheSopranosCover,
        title : "The Sopranos",
        category : "سریال",
        rating : "TV-MA",
        imdb : {
            rate : 9.2,
            votesCount : 284501,
            top250Imdb : 15
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "جنایی"],
        releaseYear : 1999 ,
        episodeLength : "55",
        producerCountries : ["آمریکا"],
        airSituation : "finished",
        lastSeasonYear : 2007 ,
        director : "David Chase",
        actors : ["Edie Falco" , "James Gandolfini" , "Lorraine Bracco" , "Michael Imperioli" ],
        isForcedSubtitle : true ,
        isDubbed : false,
        summary : "سریال داستان یک خانواده ایتالیایی است که در نیو جرسی زندگی میکنند که به فعالیت های مافیایی مشغولند. تونی سوپرانو به عنوان رییس گروه مافیایی انتخاب می شود . شخصیت او در خانه پدری است عاطفی و مهربان و دلسوز و در بیرون از خانه یک جنایتکار و بیماری روانی است.",
        update : " قسمت آخر فصل ششم اضافه شد." ,
        postingDate : postingDate , 
        commentsCount : 48
    }
    ,
    {
        id : 9,
        image : DuneCover,
        title : "Dune 2021",
        category : "فیلم",
        rating : "PG-13",
        imdb : {
            rate : 8.2,
            votesCount : 378000,
            top250Imdb : 0
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "علمی و تخیلی" , "ماجراجویی"],
        releaseYear : 2021 ,
        producerCountries : ["مجارستان" , "کانادا" , "آمریکا"],
        director : "Denis Villeneuve",
        actors : ["Jason Momoa" , "Oscar Isaac" , "Rebecca Ferguson" , "Stellan Skarsgård" , "Timothée Chalamet" , "Zendaya"],
        isForcedSubtitle : true ,
        isDubbed : true,
        summary : "اقتباسی ویژه از رمان علمی تخیلی فرانک هربرت، درباره فرزند خانواده ای اصیل که محافظت از ارزشمندترین دارایی و حیاتی ترین عنصر کهکشان را به او سپرده اند...",
        postingDate : postingDate , 
        commentsCount : 158
    }
    ,
    {
        id : 10,
        image : TheSopranosCover,
        title : "The Sopranos",
        category : "سریال",
        rating : "TV-MA",
        imdb : {
            rate : 9.2,
            votesCount : 284501,
            top250Imdb : 15
        },
        quality : "BluRay HDR 10bit 2160p",
        genres : ["درام" , "جنایی"],
        releaseYear : 1999 ,
        episodeLength : "55",
        producerCountries : ["آمریکا"],
        airSituation : "finished",
        lastSeasonYear : 2007 ,
        director : "David Chase",
        actors : ["Edie Falco" , "James Gandolfini" , "Lorraine Bracco" , "Michael Imperioli" ],
        isForcedSubtitle : true ,
        isDubbed : false,
        summary : "سریال داستان یک خانواده ایتالیایی است که در نیو جرسی زندگی میکنند که به فعالیت های مافیایی مشغولند. تونی سوپرانو به عنوان رییس گروه مافیایی انتخاب می شود . شخصیت او در خانه پدری است عاطفی و مهربان و دلسوز و در بیرون از خانه یک جنایتکار و بیماری روانی است.",
        update : " قسمت آخر فصل ششم اضافه شد." ,
        postingDate : postingDate , 
        commentsCount : 48
    }
]