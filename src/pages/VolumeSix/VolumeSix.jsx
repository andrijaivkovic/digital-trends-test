import { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import numberToWords from "number-to-words";
import scrollIntoView from "scroll-into-view";

import Volume from "../../components/Volume/Volume";

import Decoration from "../../components/Decoration/Decoration";

import { VOLUME_READ_OBSERVER_DELAY } from "../../helpers/variables";
import Image from "../../components/Image/Image";

const volumeNumber = 6;

const VolumeSix = ({
  language,
  handleChangeCurrentVolumeNumber,
  handleAddReadVolume,
  readVolumes,
}) => {
  const [isVolumeRead, setIsVolumeRead] = useState();

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  useEffect(() => {
    if (isVolumeRead === false)
      scrollIntoView(volumeTitle.current, { time: 1200, align: { top: 0.4 } });
  }, [isVolumeRead]);

  useEffect(() => {
    document.body.classList.add(
      `volume-${numberToWords.toWords(volumeNumber)}`
    );

    return () => {
      document.body.classList.remove(
        `volume-${numberToWords.toWords(volumeNumber)}`
      );
    };
  });

  useEffect(() => {
    localStorage.setItem("lastVisitedVolume", volumeNumber);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) handleAddReadVolume(volumeNumber);
      },
      { threshold: 1 }
    );

    // observer.observe(lastSection.current);
    setTimeout(
      () => observer.observe(lastSection.current),
      VOLUME_READ_OBSERVER_DELAY
    );

    return () => observer.disconnect();
  }, [handleAddReadVolume]);

  useEffect(() => {
    setIsVolumeRead(readVolumes.includes(volumeNumber));
  }, [readVolumes]);

  useEffect(() => {
    handleChangeCurrentVolumeNumber(volumeNumber);
  }, [handleChangeCurrentVolumeNumber]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume Six - Data is What You Came For - Big data, research, research, research"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Six
        </title>
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_six-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_six-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_six-mobile.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_seven-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_seven-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_seven-mobile.webp"
          as="image"
        />
      </Helmet>
      <Volume className="volume--six">
        <div
          ref={volumeTitle}
          className="volume__title volume__title--reverse volume__title--volume-six"
        >
          <div className="volume__title-image volume__title-image--volume-six">
            <Image
              webpPath="/images/volumes/volume-six/volume_6_image_title.webp"
              path="/images/volumes/volume-six/volume_6_image_title.jpg"
              placeholderPath="/images/volumes/volume-six/volume_6_image_title-placeholder.jpg"
              altText="Abstract illustration of a data center."
            />
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-six">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                >
                  <g
                    id="Group_10998"
                    data-name="Group 10998"
                    transform="translate(-1351 -846)"
                  >
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="18"
                      cy="18"
                      r="18"
                      transform="translate(1351 846)"
                      fill="#8488ff"
                    />
                    <g
                      id="Group_10997"
                      data-name="Group 10997"
                      transform="translate(-1.101 -2.354)"
                    >
                      <line
                        id="Line_18"
                        data-name="Line 18"
                        x2="5"
                        y2="5"
                        transform="translate(1361.101 868.054)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_19"
                        data-name="Line 19"
                        y1="12.5"
                        x2="12.092"
                        transform="translate(1366.401 860.354)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
                {language === "en-US" ? (
                  <p>You’ve completed this Volume.</p>
                ) : (
                  <p>Završili ste ovaj Volume.</p>
                )}
              </div>
            )}
          </div>
          <div className="volume__title-text volume__title-text--volume-six">
            <p className="volume__title-number volume__title-number--volume-six">
              Volume 6
            </p>
            <h2 className="volume__title-name volume__title-name--volume-six">
              Data is What You Came For
            </h2>
            <p className="volume__title-description volume__title-description--volume-six">
              Big data, research, research, research
            </p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-six-section-one">
            <div className="volume__textbox volume__textbox--volume-six">
              {language === "en-US" ? (
                <>
                  <p>
                    One of those pages with quotes that everyone follows,
                    sometimes unsure if it’s actually from an influential person
                    or just a relative of the administrator, often posts the
                    following quote: Without data, you’re just a person with an
                    opinion.
                  </p>
                  <p>
                    Each time this quote is attributed to someone else, but a
                    simple Google search reveals that it’s a quote from William
                    Edwards Deming, an American statistician, professor, and
                    composer.
                  </p>
                  <p>
                    Now, how can we prove if this quote makes any sense? By
                    applying it to any profession.
                  </p>
                  <p>
                    So, what role do data, research, and analysis play in
                    digital marketing?
                  </p>
                  <p>In short terms – a significant one.</p>
                </>
              ) : (
                <>
                  <p>
                    Jedna od onih stranica sa citatima koju svi prate, a nekada
                    prosto nisu sigurni da li je to zapravo izgovorila neka
                    uticajna osoba ili neki rođak administratora profila, baš
                    često objavljuje sledeći citat: Bez podataka, vi ste samo
                    osoba sa stavom.
                  </p>
                  <p>
                    Svaki put se taj citat pripisuje nekome drugom, ali
                    jednostavnim guglanjem , pretragom podataka koje nam ova
                    platforma nudi, dolazi se do informacije da je to rečenica
                    Vilijama Edvardsa Deminga, američkog statističara, profesora
                    i kompozitora.
                  </p>
                  <p>
                    Kako proveriti da li ovaj citat ima smisla? Primeniti ga na
                    bilo koju profesiju.
                  </p>
                  <p>
                    Pa, koju ulogu podaci i generalno istraživanje,
                    pretraživanje i analiza imaju u digitalnom marketingu?
                  </p>
                  <p>Ukratko – veliku.</p>
                </>
              )}
            </div>
            <Decoration
              style={{ width: "70rem", height: "70rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_6_deco_2.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-six-section-two">
            <div className="volume__image volume__image--vertical">
              <Image
                webpPath="/images/volumes/volume-six/volume_6_image_1.webp"
                path="/images/volumes/volume-six/volume_6_image_1.jpg"
                placeholderPath="/images/volumes/volume-six/volume_6_image_1-placeholder.jpg"
                altText="McDonald's mobile app in-app screenshot."
              />
              <div className="volume__image-description">
                <p>McDonald’s</p>
              </div>
            </div>
            <div className="volume__image volume__image--vertical">
              <Image
                webpPath="/images/volumes/volume-six/volume_6_image_2.webp"
                path="/images/volumes/volume-six/volume_6_image_2.jpg"
                placeholderPath="/images/volumes/volume-six/volume_6_image_2-placeholder.jpg"
                altText="Body of text explaining how Marriott Hotels use big data."
              />
              <div className="volume__image-description">
                <p>Marriott Hotels</p>
              </div>
            </div>
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-six-section-three">
            <div className="volume__textbox volume__textbox--volume-six">
              {language === "en-US" ? (
                <>
                  <p>
                    Even if you’ve created the campaign of a lifetime, it might
                    be completely invisible to others if you haven’t targeted
                    the right audience. Mapping the target audience could have
                    been a challenge in the 20th century, but the 21st century,
                    with all its technologies, completely surpasses it and helps
                    with what we call – big data.
                  </p>
                  <p>
                    Gathering information about customers and their searches,
                    interests, and expectations is possible today, with
                    specialized software that can create a narrower picture.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Čak i ako ste napravili kampanju karijere, ona za druge može
                    biti potpuno nevidljiva ukoliko niste targetirali pravu
                    ciljnu grupu. Mapiranje ciljne grupe je mogao biti izazov u
                    XX veku, ali XXI vek ga sa svim svojim tehnologijama potpuno
                    prevazilazi i u tome mu pomaže ono što zovemo – big data.
                  </p>
                  <p>
                    Prikupljanje informacija o klijentima i njihovom
                    pretraživanju, interesovanjima i očekivanjima je danas
                    moguće, uz specijalizovani softver na osnovu koga se može
                    formirati uža slika.
                  </p>
                </>
              )}
            </div>
            <Decoration
              style={{ width: "72rem", height: "48rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_6_deco_1.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-six-section-four">
            <div className="volume__image volume__image--vertical">
              <Image
                webpPath="/images/volumes/volume-six/volume_6_image_3.webp"
                path="/images/volumes/volume-six/volume_6_image_3.jpg"
                placeholderPath="/images/volumes/volume-six/volume_6_image_3-placeholder.jpg"
                altText="Screenshot of the rewards screen in Starbuck's mobile app."
              />
              <div className="volume__image-description">
                <p>Starbucks</p>
              </div>
            </div>
            <div className="volume__image volume__image--vertical">
              <Image
                webpPath="/images/volumes/volume-six/volume_6_image_4.webp"
                path="/images/volumes/volume-six/volume_6_image_4.jpg"
                placeholderPath="/images/volumes/volume-six/volume_6_image_4-placeholder.jpg"
                altText="Screenshot of the recommended page in Netflix's mobile app."
              />
              <div className="volume__image-description">
                <p>Netflix</p>
              </div>
            </div>
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-six-section-five">
            <div className="volume__textbox volume__textbox--volume-six">
              {language === "en-US" ? (
                <>
                  <p>How is it formed?</p>
                  <p>
                    By first analyzing the audience in general, then determining
                    the target audience based on that, and finally, based on the
                    collected information about the target audience, working to
                    improve their user experience.
                  </p>
                  <p>
                    This includes analyzing all the collected information and
                    implementing it into the strategy and, ultimately,
                    communication.
                  </p>
                  <p>
                    The second, but the first most important thing about data is
                    that it can better understand customer behavior patterns,
                    which can also lead to increased engagement.
                  </p>
                </>
              ) : (
                <>
                  <p>Kako se ona formira?</p>
                  <p>
                    Tako što se prvo analizira publika generalno, pa se na
                    osnovu toga određuje ciljna grupa, a potom se, na osnovu
                    prikupljenih informacija o ciljnoj grupi, radi na
                    poboljšanju njihovog korisničkog iskustva.
                  </p>
                  <p>
                    To uključuje analizu svih prikupljenih informacija i njihovo
                    implementiranje u strategiju i naposletku – komunikaciju.
                  </p>
                  <p>
                    Druga, a zapravo prva stvar po važnosti u vezi sa podacima
                    je ta da se na osnovu istih mogu bolje razumeti obrasci
                    ponašanja kupaca, što takođe može dovesti do povećanja iste.
                  </p>
                </>
              )}
            </div>
            <Decoration
              style={{ width: "70rem", height: "70rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_6_deco_3.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-six-section-six">
            <div className="volume__image volume__image--vertical">
              <Image
                webpPath="/images/volumes/volume-six/volume_6_image_5.webp"
                path="/images/volumes/volume-six/volume_6_image_5.jpg"
                placeholderPath="/images/volumes/volume-six/volume_6_image_5-placeholder.jpg"
                altText="Body of text explaining how Amazon uses big data."
              />
              <div className="volume__image-description">
                <p>Amazon</p>
              </div>
            </div>
            <div className="volume__image volume__image--vertical">
              <Image
                webpPath="/images/volumes/volume-six/volume_6_image_6.webp"
                path="/images/volumes/volume-six/volume_6_image_6.jpg"
                placeholderPath="/images/volumes/volume-six/volume_6_image_6-placeholder.jpg"
                altText="Spotify Wrapped in-app screenshot."
              />
              <div className="volume__image-description">
                <p>Spotify</p>
              </div>
            </div>
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-six-section-seven"
          >
            <div className="volume__textbox volume__textbox--volume-six">
              {language === "en-US" ? (
                <>
                  <p>
                    Data is also crucial for getting first-hand feedback, and
                    based on it, it’s possible to understand what consumers
                    think about a business or brand. Although a lot of data is
                    available on social media today, big data provides a deeper
                    insight into consumer expectations.
                  </p>
                  <p>
                    Last (but certainly not least), big data offers the
                    possibility of measuring growth – in different stages of the
                    campaign.
                  </p>
                  <p>
                    Measuring results in this way can help brands learn from
                    mistakes, as well as from smart solutions, and, ultimately,
                    show their success to the audience. And even to competitors.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Podaci su takođe važni za dobijanje feedbacka iz prve ruke,
                    odnosno na osnovu istih je moguće razumeti šta potrošači
                    misle o nekom biznisu ili brendu. Iako je dosta podataka
                    danas dostupno i na društvenim mrežama, big data daju jedan
                    dublji insight u očekivanja potrošača.
                  </p>
                  <p>
                    I poslednje (ali naravno, ne najmanje bitno) – big data nude
                    mogućnost merenja rasta – i to u različitim fazama kampanje.
                  </p>
                  <p>
                    Merenje rezultata u tom smislu može pomoći brendovima da uče
                    iz grešaka, ali i iz pametnih rešenja i na kraju da svoj
                    uspeh pokažu publici. Pa i konkurentima.
                  </p>
                </>
              )}
            </div>
            <Decoration
              style={{ width: "60rem", height: "48rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_6_deco_4.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeSix;
