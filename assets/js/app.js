const appEl = document.getElementById('app');
const bulletinsEl = document.getElementById('bulletins');
const NEWS = [
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "MICHAEL R. SISAK, ERIC TUCKER, MICHELLE L. PRICE and COLLEEN LONG",
        "title": "Michael Cohen to face bruising cross-examination by Trump's lawyers",
        "description": "NEW YORK (AP) — Donald Trump 's fixer-turned-foe awaits a bruising round of questioning from the former president's lawyers on Tuesday after testimony that linked the celebrity client to all aspects of a hush money scheme that prosecutors say was aimed at sti…",
        "url": "https://apnews.com/735aadfd1ce015e05ba955c203a96f1b",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/6f56935b9db347c88eb70dffcc1ab858/1920.jpeg",
        "publishedAt": "2024-05-14T04:03:46Z",
        "content": "NEW YORK (AP) — Donald Trump 's fixer-turned-foe awaits a bruising round of questioning from the former president's lawyers on Tuesday after testimony that linked the celebrity client to all aspects … [+5902 chars]"
    },
    {
        "source": {
            "id": "breitbart-news",
            "name": "Breitbart News"
        },
        "author": "Paul Bois",
        "title": "Biden Campaign Attacks Trump in Mother's Day Ad",
        "description": "Former President Donald Trump's team blasted the Joe Biden campaign for releasing a Mother's Day attack ad.",
        "url": "https://www.breitbart.com/politics/2024/05/13/biden-campaign-attacks-trump-mothers-day-ad/",
        "urlToImage": "https://media.breitbart.com/media/2024/03/Donald-Trump-and-Joe-Biden-2-640x335.jpg",
        "publishedAt": "2024-05-14T03:38:40Z",
        "content": "Former President Donald Trump’s team blasted the Joe Biden campaign for releasing a Mother’s Day attack ad.\r\nOn Sunday, the Biden campaign released an ad attacking the former president by asking the … [+2470 chars]"
    },
    {
        "source": {
            "id": "google-news-ca",
            "name": "Google News (Canada)"
        },
        "author": "BBC.com",
        "title": "Michael Cohen details what life was like as Trump's lawyer - BBC.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiMWh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy93b3JsZC11cy1jYW5hZGEtNjkwMDY0NTXSATVodHRwczovL3d3dy5iYmMuY29tL25ld3Mvd29ybGQtdXMtY2FuYWRhLTY5MDA2NDU1LmFtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-05-14T03:33:48+00:00",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The New York Times",
        "title": "Worry About Women Voters Drove Trump's Hush-Money Decisions, Cohen Says - The New York Times",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiSWh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjQvMDUvMTMvbnlyZWdpb24vdHJ1bXAtdHJpYWwtd29tZW4tdm90ZXJzLmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-05-14T02:49:28+00:00",
        "content": null
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Serenitie Wang",
        "title": "Stormy Daniels’ attorney says Daniels wore a bulletproof vest to and from court | CNN Politics",
        "description": "Stormy Daniels’ attorney Clark Brewster describes Daniels’ fears of security coming into New York to testify in the Trump hush money trial.",
        "url": "https://www.cnn.com/2024/05/13/politics/video/stormy-daniels-bulletproof-vest-clark-brewster-trump-hush-money-trial-ac360-digvid",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2151610711.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-05-14T01:38:37.653Z",
        "content": "Stormy Daniels attorney Clark Brewster describes Daniels fears of security coming into New York to testify in the Trump hush money trial."
    },
    {
        "source": {
            "id": "google-news-uk",
            "name": "Google News (UK)"
        },
        "author": "The Independent",
        "title": "Trump trial live: Michael Cohen testifies he did everything to 'protect my boss' - The Independent",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LmluZGVwZW5kZW50LmNvLnVrL25ld3Mvd29ybGQvYW1lcmljYXMvdXMtcG9saXRpY3MvbWljaGFlbC1jb2hlbi10cnVtcC10cmlhbC1saXZlLW5ld3MtdXBkYXRlcy1iMjU0NDM5OC5odG1s0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-05-14T01:30:28+00:00",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "PBS NewsHour",
        "title": "Tamara Keith and Amy Walter on polls showing Biden trailing Trump in key states - PBS NewsHour",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnBicy5vcmcvbmV3c2hvdXIvc2hvdy90YW1hcmEta2VpdGgtYW5kLWFteS13YWx0ZXItb24tcG9sbHMtc2hvd2luZy1iaWRlbi10cmFpbGluZy10cnVtcC1pbi1rZXktc3RhdGVz0gF1aHR0cHM6Ly93d3cucGJzLm9yZy9uZXdzaG91ci9hbXAvc2hvdy90YW1hcmEta2VpdGgtYW5kLWFteS13YWx0ZXItb24tcG9sbHMtc2hvd2luZy1iaWRlbi10cmFpbGluZy10cnVtcC1pbi1rZXktc3RhdGVz?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-05-14T00:36:43+00:00",
        "content": null
    },
    {
        "source": {
            "id": "cnn-es",
            "name": "CNN Spanish"
        },
        "author": "Alexandra Ferguson",
        "title": "Conclusiones del día 16 del juicio penal contra Donald Trump: primer día de testimonio de Michael Cohen",
        "description": "Michael Cohen implicó a su exjefe Donald Trump en el esquema de pago de dinero por silencio a Stormy Daniels pocos días antes de las elecciones de 2016, diciendo que entregó US$ 130.000 bajo la dirección de Trump y se le prometió el reembolso.",
        "url": "https://cnnespanol.cnn.com/2024/05/13/conclusiones-dia-16-juicio-penal-donald-trump-testimonio-michael-cohen-trax/",
        "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2024/05/20240513-152514-resized.jpg?quality=100&strip=info",
        "publishedAt": "2024-05-14T00:02:15Z",
        "content": "(CNN) -- Michael Cohen implicó a su exjefe Donald Trump en el esquema de pago de dinero por silencio a Stormy Daniels pocos días antes de las elecciones de 2016, diciendo que entregó US$ 130.000 bajo… [+10917 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "CBS News",
        "title": "Takeaways from Michael Cohen's 1st day on the stand in Trump trial",
        "description": "Donald Trump's former lawyer and self-described \"fixer\" Michael Cohen took the stand Monday in the former president's criminal \"hush money\" trial. CBS News legal analyst Rikki Klieman, who was in the courtroom, joins to break down the testimony.",
        "url": "https://www.cbsnews.com/video/michael-cohen-1st-day-on-stand-trump-trial-takeaways/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/14/00c98e0c-3035-4589-ae58-ff54343695cc/thumbnail/1200x630/6989385a1365472d4f359cb33196699f/cbsn-fusion-michael-cohen-1st-day-on-stand-trump-trial-takeaways-thumbnail.jpg?v=da1edae61593776e0985328155219700",
        "publishedAt": "2024-05-14T00:01:00+00:00",
        "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
        "source": {
            "id": "the-huffington-post",
            "name": "The Huffington Post"
        },
        "author": null,
        "title": "John Dean Thinks Trump Team Tripped Up, And It&#x27;s Going To Cost Them",
        "description": null,
        "url": "https://www.huffpost.com/entry/john-dean-donald-trump-trial-tripped-up_n_6641c5f4e4b0866a5b2c891d",
        "urlToImage": null,
        "publishedAt": "2024-05-13T23:22:15.7738613Z",
        "content": null
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ex-lawyer Michael Cohen says he paid hush money for Trump's benefit",
        "description": "In court, Michael Cohen also said Trump had warned 'a lot of women' would make claims against him.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-69004872",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/96FA/production/_133305683_ac689da2c2ecf6e12ce80b9ccafeb08d768f4ef10_0_3000_20001000x667-1.jpg",
        "publishedAt": "2024-05-13T23:07:18.2427654Z",
        "content": "Testimony from the star witness in Donald Trump's Manhattan trial has repeatedly tied a 2016 hush-money arrangement back to the ex-president.\r\nOn the stand, Michael Cohen said he spoke to Mr Trump im… [+3445 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Shayna Jacobs, Hannah Knowles, Rachel Weiner",
        "title": "How Michael Cohen went from Trump’s fixer to a key witness against him",
        "description": "For years, Cohen said he fixed Trump’s problems. Now the disbarred lawyer is the star witness for New York prosecutors trying to link Trump to an illegal hush money plot.",
        "url": "https://www.washingtonpost.com/politics/2024/05/13/michael-cohen-testimony-trump-hush-money-trial/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MHHQRN4F6EEWKTL5R75QTG5XYI.jpg&w=1440",
        "publishedAt": "2024-05-13T22:53:25Z",
        "content": "NEW YORK At first, Michael Cohen testified about all the problems he fixed for Donald Trump the boss whose praise made Cohen feel like he was on top of the world.\r\nWhen reporters angered Trump, Cohen… [+326 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Louis Casiano, Andrew Murray",
        "title": "Vivek Ramaswamy to join Trump in Manhattan court on Tuesday",
        "description": "Vivek Ramaswamy will join former President Trump on Monday in a Lower Manhattan court as the NY v. Trump case continues.",
        "url": "https://www.foxnews.com/politics/vivek-ramaswamy-join-trump-manhattan-court-tuesday",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/trump-vivek-in-court.jpg",
        "publishedAt": "2024-05-13T22:39:07Z",
        "content": "Vivek Ramaswamy, the multimillionaire former biotech executive and former presidential candidate, will join former President Donald Trump Tuesday in court. \r\nHe will spend the entire day with Trump a… [+371 chars]"
    },
    {
        "source": {
            "id": "msnbc",
            "name": "MSNBC"
        },
        "author": "Hayes Brown",
        "title": "Joe Biden is swinging right to beat Trump. That's a mistake.",
        "description": "Joe Biden is moving to block Donald Trump from an advantage on immigration and China, but limiting asylum at the border and hiking China tariffs are bad bets.",
        "url": "https://www.msnbc.com/opinion/msnbc-opinion/biden-trump-democrats-immigration-election-rcna151979",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240513-joe-biden-se-1158a-dae494.jpg",
        "publishedAt": "2024-05-13T22:08:09Z",
        "content": "President Joe Biden is struggling to make headway in his re-election campaign, with recent polling still showing him in a neck-and-neck race with former President Donald Trump. Incumbent presidents o… [+6116 chars]"
    },
    {
        "source": {
            "id": "google-news-fr",
            "name": "Google News (France)"
        },
        "author": "BFMTV",
        "title": "\"Il m'a dit de le faire\": au procès de Donald Trump, son ancien avocat Michael Cohen l'incrimine - BFMTV",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMirgFodHRwczovL3d3dy5iZm10di5jb20vaW50ZXJuYXRpb25hbC9hbWVyaXF1ZS1ub3JkL2V0YXRzLXVuaXMvaWwtbS1hLWRpdC1kZS1sZS1mYWlyZS1hdS1wcm9jZXMtZGUtZG9uYWxkLXRydW1wLXNvbi1hbmNpZW4tYXZvY2F0LW1pY2hhZWwtY29oZW4tbC1pbmNyaW1pbmVfQUQtMjAyNDA1MTMwOTUwLmh0bWzSAbIBaHR0cHM6Ly93d3cuYmZtdHYuY29tL2FtcC9pbnRlcm5hdGlvbmFsL2FtZXJpcXVlLW5vcmQvZXRhdHMtdW5pcy9pbC1tLWEtZGl0LWRlLWxlLWZhaXJlLWF1LXByb2Nlcy1kZS1kb25hbGQtdHJ1bXAtc29uLWFuY2llbi1hdm9jYXQtbWljaGFlbC1jb2hlbi1sLWluY3JpbWluZV9BRC0yMDI0MDUxMzA5NTAuaHRtbA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-05-13T22:04:00+00:00",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Michael Cohen details what life was like as Trump's lawyer",
        "description": "Cohen said the ex-president never had an email address, telling Cohen people ''have gone down'' because of emails used against them.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-69006455",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A12C/production/_133306214_d3d837e24b7b1a3e560c054e82a19e2cfa78a98f.jpg",
        "publishedAt": "2024-05-13T21:52:14.0396697Z",
        "content": "Standing just hundreds of feet from his former boss of one decade, Michael Cohen walked a Manhattan courtroom through the highs and lows of working behind-the-scenes for Donald Trump, a man for whom … [+2124 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Bloomberg",
        "title": "Live News as Michael Cohen Testifies in Trump's Hush Money Trial",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiVmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9saXZlLWJsb2cvMjAyNC0wNS0xMy9kb25hbGQtdHJ1bXAtY3JpbWluYWwtdHJpYWwtbWF5LTEz0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-05-13T21:47:10+00:00",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    }
]
let scrollTimer;
let isSpeech = false;
const scroll = {
    height: window.innerHeight,
    get scrollY() {
        return window.scrollY;
    },
    get activeSlide() {
        return this.scrollY / this.height;
    },
    set activeSlide(value) {
        window.scrollTo(0, value * this.height);
    }
};

// Function to be called when scrolling ends
function handleScrollEnd() {
    console.log("Scrolling has ended");
    // Your logic here after scrolling ends
    if (isSpeech){
        speechSynthesis.cancel();
    }
    const slideIndex = Math.round(scroll.activeSlide);
    const newsFromSlide =  document.getElementById('news-' + slideIndex).textContent;
    const nextSlide = NEWS.length > slideIndex ? slideIndex + 1 : 0;
    // textToSpeech(newsFromSlide, () => { scroll.activeSlide = nextSlide;});
}





const textToSpeech = (text, onEnd) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.volume = 0.8;
    speech.rate = 1;
    speech.pitch = 0.7;

    // Set event handlers
    speech.onstart = () => {
        isSpeech = true;
    }

    speech.onend = () => {
        isSpeech = false;
        onEnd();
    }

    speech.onerror = (error) => {
        console.error('Speech error', error);
    }

    speechSynthesis.speak(speech);
}


const generateNewBulletIn = ()=> {

    NEWS.filter(
            article=> (article.urlToImage !== null && 
            article.urlToImage !== '')

        ).forEach((item, index) => {
        // Create slide element
        const slide = document.createElement('slide');
        slide.classList.add('slide');
        slide.setAttribute('data-index', index);

        // create news content
        const newsContent = document.createElement('div');
        newsContent.classList.add('news-content');

        // create news text   
        const newsText = document.createElement('div');
        newsText.classList.add('news-text');
        newsText.id = 'news-' + index;
        newsText.textContent = item.content.replace(/\[.*?\]/g, '');

        // create thumbnail 
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.style.backgroundImage = `url(${item.urlToImage})`;

        
        // create Source
        const source = document.createElement('div');
        source.classList.add('source');
        source.textContent = item.source.name;

        // Published on date and time
        const publishedDate = new Date(item.publishedAt);
        const publishedOnEl = document.createElement('div');
            publishedOnEl.classList.add('published-on');
        // Date
        const publishedDateEl = document.createElement('span');
        publishedDateEl.classList.add('published-date');
            publishedDateEl.textContent = publishedDate.toDateString();

        // Time
        const publishedTimeEl = document.createElement('span');
        publishedTimeEl.classList.add('published-time');
        const HH = publishedDate.getHours() > 12 ? publishedDate.getHours() - 12 : publishedDate.getHours();
        const time = `${HH}:${publishedDate.getMinutes()} ${publishedDate.getHours() > 12 ? 'PM' : 'AM'}`;
        publishedTimeEl.textContent = time;
        publishedOnEl.appendChild(publishedDateEl);
        publishedOnEl.appendChild(publishedTimeEl);
        

        // create watermark
        const watermark = document.createElement('div');
        watermark.classList.add('watermark');

        // Append all elements to the slide
        newsContent.appendChild(newsText);
        newsContent.appendChild(source);
        newsContent.appendChild(publishedOnEl);
        newsContent.appendChild(watermark);
        slide.appendChild(thumbnail);
        slide.appendChild(newsContent);

      // Append the slide to bulletinsEl
        bulletinsEl.appendChild(slide);

        // Register Window Scroll event listener
        window.addEventListener('scroll', () => {
            // Clear the previous timeout
            clearTimeout(scrollTimer);
            // Set a new timeout
            scrollTimer = setTimeout(handleScrollEnd, 200); 
        });
    })

}





// Call the fetchTopHeadlines function
(async () => {
    generateNewBulletIn();
})()