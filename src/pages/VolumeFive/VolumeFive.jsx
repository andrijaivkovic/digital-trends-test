import { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { useApp } from "../../contexts/useApp";

import Volume from "../../components/Volume/Volume";

import Decoration from "../../components/Decoration/Decoration";
import Image from "../../components/Image/Image";
import Video from "../../components/Video/Video";

import volume5video1 from "/video/volume_five_video_one.mp4";

import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 5;

const VolumeFive = () => {
  const { language } = useApp();

  const [isVolumeRead, setIsVolumeRead] = useState(true);
  const [isiPhone, setIsiPhone] = useState(false);

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  useEffect(() => {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      setIsiPhone(true);
    }
  }, [isiPhone]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume Five - Listen For My Voice When I’m Searching for you"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Five
        </title>
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_five-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_five-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_five-mobile.webp"
          as="image"
        />
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
      </Helmet>
      <Volume
        lastSection={lastSection}
        volumeTitle={volumeTitle}
        isVolumeRead={isVolumeRead}
        setIsVolumeRead={setIsVolumeRead}
        volumeNumber={volumeNumber}
        className="volume--five"
      >
        <div
          ref={volumeTitle}
          className="volume__title volume__title--non-reverse volume__title--volume-five"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-image volume__title-image--volume-five"
          >
            <Image
              webpPath="/images/volumes/volume-five/volume_five_image_title.webp"
              path="/images/volumes/volume-five/volume_five_image_title.png"
              placeholderPath="/images/volumes/volume-five/volume_five_image_title-placeholder.png"
              altText="Volume 5 Title Image, Apple Siri logo."
            />
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-five">
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
                      fill="#55b615"
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
                {language === "en-US" && <p>You’ve completed this Volume.</p>}
                {language === "sr-Lat" && <p>Završili ste ovaj Volume.</p>}
              </div>
            )}
          </motion.div>
          <div className="volume__title-text volume__title-text--volume-five">
            <motion.p
              {...elementsMotionProps}
              className="volume__title-number volume__title-number--volume-five"
            >
              Volume 05
            </motion.p>
            <h2 className="volume__title-name volume__title-name--volume-five">
              <motion.span {...elementsMotionProps}>Listen For My</motion.span>
              <motion.span {...elementsMotionProps}>Voice When I’m</motion.span>
              <motion.span {...elementsMotionProps}>
                Searching for you
              </motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-five"
            >
              The reality of SEO optimization and Voice Search in 2024
            </motion.p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-five-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-five"
            >
              {language === "en-US" && (
                <>
                  <p>Alexa, what is this text about? Hey, Siri? Click play.</p>
                  <p>
                    Blink twice if you’re the one doing this. If you’re not
                    blinking, then you’ve probably at least had the opportunity
                    to encounter these names in movies or memes. And in the
                    future?
                  </p>
                  <p>
                    In the future, you will become more acquainted with the
                    purpose of these names because as of 2024, voice search
                    optimization will become even more critical. Considering the
                    increasing use of voice assistants, it’s time for another
                    adaptation.
                  </p>
                </>
              )}
              {language === "sr-Lat" && (
                <>
                  <p>
                    Alexa, o čemu se radi u ovom tekstu? Ovaj, Siri, Siri pusti
                    play.
                  </p>
                  <p>
                    Trepnite 2 puta ako ste ovo vi. Ukoliko ne trepćete, onda
                    ste sigurno barem imali priliku da se susretnete sa ovim
                    imenima na filmovima ili u mimovima. A u budućnosti?
                  </p>
                  <p>
                    U budućnosti ćete se sve više upoznavati sa njihovom svrhom,
                    jer će od 2024. optimizacija glasovne pretrage postati još
                    važnija. Uzimajući u obzir sve veću upotrebu glasovnih
                    asistenata, vreme nam je za još jednu adaptaciju.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_five_deco_one.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-five-section-two">
            <motion.div {...elementsMotionProps} className="volume__image">
              <Image
                webpPath="/images/volumes/volume-five/volume_five_image_one.webp"
                path="/images/volumes/volume-five/volume_five_image_one.jpg"
                placeholderPath="/images/volumes/volume-five/volume_five_image_one-placeholder.jpg"
                altText="Amazon Echo with Amazon Alexa Voice assistant"
              />
              <div className="volume__image-description">
                {language === "en-US" && <p>Amazon Echo with Amazon Alexa</p>}
                {language === "sr-Lat" && <p>Amazon Echo sa Amazon Alexa</p>}
              </div>
            </motion.div>
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-five-section-three">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-five"
            >
              {language === "en-US" && (
                <>
                  <p>
                    In the future, SEO optimization will have to adapt to voice
                    search. This involves not only keywords in English or
                    Serbian but also key phrases characteristic of the speech or
                    slang of the target audience.
                  </p>
                  <p>And what does this mean for us?</p>
                  <p>
                    Well, for starters, a better understanding of the target
                    audience, their needs, and reasons to choose our brand.
                    Also, we must consider the speed of the times we live in and
                    the consequences it has on society, its desires, needs, and
                    preferences.
                  </p>
                </>
              )}
              {language === "sr-Lat" && (
                <>
                  <p>
                    Naime, SEO optimizacija će u budućnosti morati da se
                    adaptira na govornu pretragu. Što ne podrazumeva više samo
                    ključne reči na engleskom ili srpskom, već i ključne izjave
                    karakteristične govoru ili slengu ciljne grupe.
                  </p>
                  <p>A šta ovo znači za nas?</p>
                  <p>
                    Pa, za početak još bolje razumevanje ciljne grupe, njihovih
                    potreba i razloga zbog kojih treba da izaberu baš naš brend.
                    Na sve to, moramo imati u vidu brzinu vremena u kom živimo i
                    posledice kakve ima na društvo, njegove želje, potrebe i
                    preferencije.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_five_deco_two.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-five-section-four">
            {!isiPhone && (
              <motion.div {...elementsMotionProps} className="volume__video">
                <Video
                  placeholderPath="/images/volumes/volume-five/volume_5_image_2-placeholder.jpg"
                  path={volume5video1}
                />
                <div className="volume__image-description">
                  {language === "en-US" && <p>Apple Siri Voice Search</p>}
                  {language === "sr-Lat" && <p>Apple Siri glasovna pretraga</p>}
                </div>
              </motion.div>
            )}
            {isiPhone && (
              <motion.div {...elementsMotionProps} className="volume__image">
                <Image
                  webpPath="/images/volumes/volume-five/volume_five_image_two.webp"
                  path="/images/volumes/volume-five/volume_five_image_two.jpg"
                  placeholderPath="/images/volumes/volume-five/volume_five_image_two-placeholder.jpg"
                  altText="Amazon Echo with Amazon Alexa Voice assistant."
                />
                <div className="volume__image-description">
                  {language === "en-US" && <p>Apple Siri Voice Search</p>}
                  {language === "sr-Lat" && <p>Apple Siri glasovna pretraga</p>}
                </div>
              </motion.div>
            )}
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-five-section-five"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-five"
            >
              {language === "en-US" && (
                <>
                  <p>
                    To optimize the visibility of what we offer in the future,
                    we must first do what is necessary: adapt to the target
                    audience.
                  </p>
                  <p>The solution? Talk, talk, talk.</p>
                  <p>Let the vocal cords work and lead us to new insights.</p>
                </>
              )}
              {language === "sr-Lat" && (
                <>
                  <p>
                    Da bismo optimizovali vidljivost onoga što nudimo, u
                    budućnosti najpre moramo uraditi ono što je neophodno:
                    prilagoditi se ciljnoj grupi.
                  </p>
                  <p>Rešenje? Pričajte, pričajte, pričajte.</p>
                  <p>Neka glasne žice prorade i dovedu nas do novih uvida.</p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "50rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_five_deco_three.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeFive;
