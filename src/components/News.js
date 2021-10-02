import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "The simple trick to prevent glasses from fogging when you wear a mask - Times of India",
      description:
        "Though getting vaccinated is the best way to protect oneself from getting infected by the novel coronavirus.",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/the-simple-trick-to-prevent-glasses-from-fogging-when-you-wear-a-mask/articleshow/86681691.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86681691,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-34654/86681691.jpg",
      publishedAt: "2021-10-02T10:30:00Z",
      content: null,
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Samantha Akkineni confirms separation with Naga Chaitanya, says they have decided to 'part ways as husban - Times of India",
      description:
        "Actress Samantha Akkineni and actor Naga Chaitanya have confirmed their separation through a social media post. The",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/samantha-akkineni-confirms-separation-with-naga-chaitanya-says-they-have-decided-to-part-ways-as-husband-and-wife-to-pursue-own-paths/articleshow/86704849.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86704849,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-39130/86704849.jpg",
      publishedAt: "2021-10-02T10:13:00Z",
      content: null,
    },
    {
      source: { id: null, name: "India Today" },
      author: "IndiaToday.in",
      title:
        "MI vs DC Live Score, Today IPL 2021 News: Prithvi Shaw returns as Delhi Capitals opt to bowl - India Today",
      description:
        "MI vs DC Live Score, Today IPL 2021 News: Rishabh Pant-led Delhi Capitals win the toss and opt to bowl first against Rohit Sharma's Mumbai Indians in Match 46 of IPL 2021 in Sharjah. Both Delhi and Mumbai made one change to their playing XIs. While Prithvi Sh…",
      url: "https://www.indiatoday.in/sports/ipl-2021/story/mi-vs-dc-live-score-today-ipl-2021-news-match-46-updates-mumbai-indians-delhi-capitals-sharjah-1859957-2021-10-02",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202110/RJV68917-647x363.jpeg?bdrG3dPoQ9O3MBBp3SSR93QLn87QDTNO",
      publishedAt: "2021-10-02T10:05:36Z",
      content: null,
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        '"Post Or No Post, Will Stand By Rahul And Priyanka Gandhi": Navjot Sidhu - NDTV',
      description:
        'Navjot Sidhu - whose apparent flip-flop as Punjab Congress chief triggered a manic week for the party just months ahead of a crucial Assembly election - today declared "post or no post... will stand by Rahul Gandhi and Priyanka Gandhi Vadra".',
      url: "https://www.ndtv.com/india-news/post-or-no-post-will-stand-by-rahul-and-priyanka-gandhi-navjot-sidhu-2561343",
      urlToImage:
        "https://drop.ndtv.com/albums/uploadedpics/small1/rahul_gandhi_sidhu_650x400-2_636200802501253036.jpg",
      publishedAt: "2021-10-02T09:44:11Z",
      content:
        "New Delhi: Navjot Sidhu - whose flip-flop this week over the Punjab Congress chief's post has only added to his party's headaches as it preps for next year's key Assembly election - declared Saturday… [+1705 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Indian Army deploys K9-Vajra howitzer regiment along LAC: Know all about the guns - Hindustan Times",
      description:
        "The K9-Vajra self-propelled howitzer weighs 50 tonnes and can strike enemy targets 50 kilometres away. These howitzers can also turn around at zero radius, basically at the same place where they are standing. Their induction will give a huge fillip to the fir…",
      url: "https://www.hindustantimes.com/india-news/indian-army-deploys-k9-vajra-howitzer-regiment-along-lac-know-all-about-the-gun-101633166922888.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2021/10/02/1600x900/k9-vajra-howitzer_1633167110011_1633167133594.jpg",
      publishedAt: "2021-10-02T09:35:51Z",
      content:
        "The Indian Army has deployed the first K9-Vajra self-propelled howitzer regiment in the forward areas in Ladakh along the Line of Actual Control (LAC) with China, news agency ANI reported.\r\nIn a vide… [+1376 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Zee moves Bombay High Court against Invesco, wants EGM demand declared illegal - Moneycontrol.com",
      description:
        "The move comes a day after the company's board rejected Invesco and OFI Global China Fund LLC 's demand for EGM, saying it 'suffered from multiple legal infirmities'",
      url: "https://www.moneycontrol.com/news/business/companies/zee-moves-bombay-high-court-against-invesco-wants-egm-demand-declared-illegal-7535121.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/09/Zee-Entertainment-770x433.jpg",
      publishedAt: "2021-10-02T09:29:03Z",
      content:
        "Zee Entertainment Enterprise Limited on October 2 moved the Bombay High Court against its biggest shareholders Invesco and OFI Global China Fund, saying their demand to call an extraordinary general … [+3171 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Reuters",
      title:
        "China angers Taiwan after it commits largest ever incursion into island - Hindustan Times",
      description:
        "Taiwanese fighters scrambled against 38 Chinese aircraft in two waves on Friday, the Taiwan Defence Ministry said. | World News",
      url: "https://www.hindustantimes.com/world-news/china-angers-taiwan-after-it-commits-largest-ever-incursion-into-island-101633166448199.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2021/10/02/1600x900/CHINA-TAIWAN-1_1633166515575_1633166525278.JPG",
      publishedAt: "2021-10-02T09:23:18Z",
      content:
        "Taiwan sharply criticised China on Saturday after Beijing marked the founding of the People's Republic of China with the largest ever incursion by the Chinese air force into the island's air defence … [+1975 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "What Happened When Ranveer Singh Met Salman Khan On The Sets Of Bigg Boss 15 - NDTV",
      description:
        "Salman  asked Ranveer to demonstrate how he will be hosting the show The Big Picture",
      url: "https://www.ndtv.com/entertainment/what-happened-when-ranveer-singh-met-salman-khan-on-the-sets-of-bigg-boss-15-2561332",
      urlToImage:
        "https://c.ndtvimg.com/2021-10/juneuh6o_salman-khan_625x300_02_October_21.jpg",
      publishedAt: "2021-10-02T09:06:40Z",
      content:
        "Ranveer and Salman on the sets of Bigg Boss 15. (courtesy colorstv)\r\nHighlights\r\n<ul><li>Bigg Boss 15 will premiere tonight\r\n</li><li> Ranveer Singh visited the sets of the show \r\n</li><li> He will s… [+1755 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "World's Largest Khadi National Flag, Weighing 1,000 Kg, Unveiled In Leh - NDTV",
      description:
        "The world's largest Khadi national flag was installed in Leh, Ladakh, today on the occasion of Mahatma Gandhi's 152nd birth anniversary. It was inaugurated by Ladakh Lieutenant Governor RK Mathur this morning.",
      url: "https://www.ndtv.com/india-news/worlds-largest-khadi-national-flag-weighing-1-000-kg-installed-in-leh-2561247",
      urlToImage:
        "https://c.ndtvimg.com/2021-10/6e56a9dg_largest-khadi-national-flag_625x300_02_October_21.jpg",
      publishedAt: "2021-10-02T09:01:10Z",
      content:
        "The national flag was inaugurated by Ladakh Lieutenant Governor RK Mathur.\r\nNew Delhi: The world's largest Khadi national flag was installed in Leh, Ladakh, today on the occasion of Mahatma Gandhi's … [+2908 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "What is happening in Chhattisgarh? CM Bhupesh Baghel says not becoming Punjab - Hindustan Times",
      description:
        "The MLAs are independent individuals and they are going to Delhi on their own wish, chief minister Bhupesh Baghel said refuting speculation that these MLAs are gathering in the Capital as a show of strength for his camp.  | Latest News India",
      url: "https://www.hindustantimes.com/india-news/what-is-happening-in-chhattisgarh-cm-bhupesh-baghel-says-not-becoming-punjab-101633164575930.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2021/10/02/1600x900/500e1aca-097a-11ec-b1ee-0b1c9108b6b1_1633164658917_1633164673918.jpg",
      publishedAt: "2021-10-02T08:55:39Z",
      content:
        "With more Congress MLAs from Chhattisgarh joining their colleagues in New Delhi amid speculation of a leadership change in the state, chief minister Bhupesh Baghel on Saturday reiterated that there i… [+1877 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Philippine President Rodrigo Duterte Says He Will Retire From Politics - NDTV",
      description:
        "Philippine President Rodrigo Duterte said Saturday he will not run for vice president in 2022 and will retire from politics, potentially paving the way for his daughter to contest the country's highest office.",
      url: "https://www.ndtv.com/world-news/philippine-president-rodrigo-duterte-says-he-will-retire-from-politics-2561288",
      urlToImage:
        "https://c.ndtvimg.com/2020-04/8nboh3hs_philippine-president-rodrigo-duterte-reuters_625x300_02_April_20.jpg",
      publishedAt: "2021-10-02T08:30:00Z",
      content:
        "Philippine President Rodrigo Duterte said he will not run for vice president in 2022. (File)\r\nManila: Philippine President Rodrigo Duterte said Saturday he will not run for vice president in 2022 and… [+1622 chars]",
    },
  ];
  constructor() {
    super();
    console.log("i am constructor");

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="news">
        <h1 className="head">SpiceHunt - Top headings</h1>
        <div className="news-items">
          {this.state.articles.map((element) => {
            return (
              <NewsItems
                key={element.url}
                title={element.title}
                description={element.description}
                img={element.urlToImage}
                tag="cricket"
              />
            );
          })}
        </div>
      </div>
    );
  }
}
