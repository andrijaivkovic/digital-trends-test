import { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import numberToWords from "number-to-words";
// import scrollIntoView from "scroll-into-view";

import Volume from "../../components/Volume/Volume";

import Decoration from "../../components/Decoration/Decoration";
import Embed from "../../components/Embed/Embed";
import Image from "../../components/Image/Image";

import { VOLUME_READ_OBSERVER_DELAY } from "../../helpers/variables";
import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 7;

const VolumeSeven = ({
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
      // scrollIntoView(volumeTitle.current, { time: 1200, align: { top: 0.4 } });
      volumeTitle.current.scrollIntoView();
  }, [isVolumeRead]);

  // useEffect(() => {
  //   if (isVolumeRead === false)
  //     scrollIntoView(volumeTitle.current, { time: 1200, align: { top: 0.4 } });
  // }, [isVolumeRead]);

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
          content="Digital Trends 2024 by Ovation; Volume Seven - The Real-Time Is Now - Is Real-Time marketing the thing to use now?"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Seven
        </title>
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
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_eight-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_eight-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_eight-mobile.webp"
          as="image"
        />
      </Helmet>
      <Volume className={"volume-seven"}>
        <div
          ref={volumeTitle}
          className="volume__title volume__title--non-reverse volume__title--volume-seven"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-image volume__title-image--volume-seven"
          >
            <Image
              webpPath="/images/volumes/volume-seven/volume_7_image_title.webp"
              path="/images/volumes/volume-seven/volume_7_image_title.png"
              placeholderPath="/images/volumes/volume-seven/volume_7_image_title-placeholder.png"
              altText="Simplistic 3D render of an hourglass."
            />
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-seven">
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
                      fill="#00A1FF"
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
          </motion.div>
          <div className="volume__title-text volume__title-text--volume-seven">
            <motion.p
              {...elementsMotionProps}
              className="volume__title-number volume__title-number--volume-seven"
            >
              Volume 7
            </motion.p>
            <h2 className="volume__title-name volume__title-name--volume-seven">
              <motion.span {...elementsMotionProps}>
                The Real-Time Is
              </motion.span>
              <motion.span {...elementsMotionProps}>Now</motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-seven"
            >
              Is Real-Time marketing the thing to use now?
            </motion.p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-seven-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-seven"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    When it comes to the time in real life, we all become
                    sensitive. To minutes, hours, days...
                  </p>
                  <p>
                    When it comes to the time on social media? Everything
                    becomes sensitive. Brand popularity, relevance, success...
                  </p>
                  <p>
                    As in life, on social media, we need to make thoughtful but
                    quick decisions about what and how in a particular
                    situation, not to say during the appearance of a certain
                    trend. Only then, when we are fast enough and brave enough,
                    can we say that our brand has Real-Time marketing.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Kada je reč o vremenu u stvarnom životu, svi postanemo
                    osetljivi. Na minute, sate, dane…
                  </p>
                  <p>
                    Kada je reč o vremenu na društvenim mrežama? Sve postane
                    osetljivo. Popularnost brenda, relevantnost, uspeh…
                  </p>
                  <p>
                    Kao i u životu, tako i na mrežama, promišljeno, ali brzo
                    treba donositi odluke šta i kako u određenoj situaciji, da
                    ne kažemo prilikom pojave određenog trenda. Tek onda kada
                    smo dovoljno brzi i dovoljno hrabri, možemo reći da naš
                    brend ima Real-Time marketing.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "50rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_7_deco_1.json"
              }
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-seven-section-two">
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "54rem", height: "64.5rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_7_deco_2.json"
              }
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="instagram"
              src="https://www.instagram.com/p/CupSgRmr3Mq/embed"
              title="Instagram carousel"
              backgroundImage="/images/embed-bg/volume-seven/volume_7_embed_1.jpg"
              allowFullScreen={true}
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-seven-section-\">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-seven"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    So, what is Real-Time marketing, and how do we decide
                    whether to react to a trend or not?
                  </p>
                  <p>
                    Every time you notice that more than 5 people around you,
                    within 2 days, mention a series/movie/promotion/global event
                    – that’s when your light bulbs should turn on. Then comes
                    the question: Does my brand have something to say about this
                    topic? Is it inherent for it to speak? Is this event
                    relevant?
                  </p>
                  <p>
                    If the answers to all these questions are yes, then it’s
                    time for quick action – a post, tweet (X), video, or
                    influencer collaboration.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A šta je sve Real-Time marketing i kako uopšte doneti odluku
                    da li reagovati na trend?
                  </p>
                  <p>
                    Svaki put kada primetite da više od 5 ljudi oko vas, u
                    rasponu od 2 dana, spomene neku
                    seriju/film/promociju/globalno dešavanje – tada je vreme
                    kada se vaše lampice pale. Potom na red dolaze pitanja: Da
                    li moj brend ima nešto da kaže na ovu temu? Da li mu je
                    svojstveno da kaže? Da li je ovo dešavanje relevantno?
                  </p>
                  <p>
                    Ukoliko su odgovori na sva ova pitanja da, onda je vreme za
                    brzu akciju – post, tweet (X), video, influensersku
                    saradnju.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_7_deco_3.json"
              }
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-seven-section-four">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7286838768236121376"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-seven/volume_7_embed_2.jpg"
              allowFullScreen={true}
            />
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "40rem", height: "40.5rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_7_deco_4.json"
              }
            />
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-seven-section-five"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-seven"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    The faster the response to the situation, the bigger the
                    results. This is most evident on TikTok and Twitter (X), as
                    well as with well-known global brands that already have a
                    well-established strategy for this type of marketing (read:
                    Oreo, Durex, Dunkin’ Donuts...).
                  </p>
                  <p>
                    However, if the answers to the above questions are not
                    affirmative, then think a little more. The line between the
                    greatest brand ever and a PR crisis is thin.
                  </p>
                  <p>
                    The recipe for success is the same at the end of the day:
                    Research, try and don’t give up. Find a connection between
                    an event and your brand, find meaning that will outweigh the
                    joke, and most importantly of all: be brave and confident.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Što je odgovor na situaciju brži, to su rezultati veći. To
                    najbolje možemo videti na TikToku i Twitteru (X-u), kao i
                    kod dobro poznatih svetskih brendova koji za ovaj vid
                    marketinga imaju već dobro uspostavljenu strategiju (čitaj:
                    Oreo, Durex, Dunkin’ Donuts…)
                  </p>
                  <p>
                    Međutim, ukoliko odgovori na gore navedena pitanja nisu
                    potvrdni, onda promislite još malo. Tanka je granica između
                    najjačeg brenda ikada i PR krize.
                  </p>
                  <p>
                    Recept za uspeh je na kraju dana uvek isti: Istražujte,
                    pokušavajte i ne odustajte. Nađite poveznicu nekog dešavanja
                    i vašeg brenda, nađite smisao koji će nadjačati foru i
                    najvažnije od svega: budite hrabri i samouvereni.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_7_deco_5.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeSeven;
