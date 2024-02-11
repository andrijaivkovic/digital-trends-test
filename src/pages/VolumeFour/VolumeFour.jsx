import { useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { useApp } from "../../contexts/useApp";

import Volume from "../../components/Volume/Volume";

import Decoration from "../../components/Decoration/Decoration";
import Embed from "../../components/Embed/Embed";

import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 4;

const VolumeFour = () => {
  const { language } = useApp();

  const [isVolumeRead, setIsVolumeRead] = useState();

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume Four - Look What TikTok Made Me Do - The answers you’re looking for are hidden on TikTok, do the research"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Four
        </title>
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_four-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_four-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_four-mobile.webp"
          as="image"
        />
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
      </Helmet>
      <Volume
        lastSection={lastSection}
        volumeTitle={volumeTitle}
        isVolumeRead={isVolumeRead}
        setIsVolumeRead={setIsVolumeRead}
        volumeNumber={volumeNumber}
        className="volume--four"
      >
        <div
          ref={volumeTitle}
          className="volume__title volume__title--reverse volume__title--volume-four"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-image volume__title-image--volume-four"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138.091"
              height="159.329"
              viewBox="0 0 138.091 159.329"
            >
              <path
                id="Path_530"
                data-name="Path 530"
                d="M120.895,34.075a36.288,36.288,0,0,1-3.137-1.826A44.1,44.1,0,0,1,109.7,25.4a37.995,37.995,0,0,1-9.078-18.73h.033A23.073,23.073,0,0,1,100.3,0H72.933V105.809c0,1.421,0,2.825-.06,4.212,0,.172-.017.332-.027.518a1.129,1.129,0,0,1-.017.236v.06a23.234,23.234,0,0,1-11.69,18.441,22.836,22.836,0,0,1-11.322,2.987,23.235,23.235,0,0,1,0-46.469,22.863,22.863,0,0,1,7.106,1.125l.033-27.861A50.83,50.83,0,0,0,17.791,70.516,53.7,53.7,0,0,0,6.074,84.964C4.919,86.956.561,94.958.033,107.946c-.332,7.372,1.882,15.009,2.937,18.166v.066A53.474,53.474,0,0,0,10.4,139.727,55.606,55.606,0,0,0,22.252,150.91v-.066l.066.066a51.2,51.2,0,0,0,27.934,8.411,49.453,49.453,0,0,0,20.732-4.584,52.028,52.028,0,0,0,16.835-12.653,52.593,52.593,0,0,0,9.174-15.245,57.1,57.1,0,0,0,3.3-17.436V53.269c.332.2,4.753,3.123,4.753,3.123a63.289,63.289,0,0,0,16.307,6.741,93.91,93.91,0,0,0,16.735,2.29V38.26c-3.366.365-10.2-.7-17.2-4.185"
                transform="translate(0 0)"
                fill="#119d8c"
              />
            </svg>
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-four">
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
                      fill="#119d8c"
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
          <div className="volume__title-text volume__title-text--volume-four">
            <motion.p
              {...elementsMotionProps}
              className="volume__title-number volume__title-number--volume-four"
            >
              Volume 04
            </motion.p>
            <h2 className="volume__title-name volume__title-name--volume-four">
              <motion.span {...elementsMotionProps}>Look What</motion.span>
              <motion.span {...elementsMotionProps}>
                TikTok Made Me Do
              </motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-four"
            >
              The answers you’re looking for are hidden on TikTok, do the
              research
            </motion.p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-four-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-four"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    Everywhere you turn, you hear the same thing: Tik-Tok,
                    Tik-Tok, Tik-Tok. And no, we’re not just talking about
                    TikTok as a platform; we’re also talking about the clock
                    that is rapidly launching us into the future of the online.
                  </p>
                  <p>
                    Some call it a platform that exploded overnight. Some say
                    it’s a platform for the young people. And some say: That
                    platform is irrelevant to me, I don’t see the fun in it.
                  </p>
                  <p>
                    Either way, the truth is that TikTok is setting standards
                    that its users, but also popular platforms like Instagram
                    and Facebook are adapting to. And as things stand, in the
                    following period, TikTok will become a competitor to
                    everyone.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Na svim stranama čuje se jedno te isto: Tik-Tok, Tik-Tok,
                    Tik-Tok. I ne, ne pričamo samo o TikToku, već i o satu koji
                    nas ubrzanim tempom lansira u online budućnost.
                  </p>
                  <p>
                    Neki bi rekli mreža koja je preko noći eksplodirala. Neki da
                    je u pitanju mreža na kojoj su samo mladi. A ima i onih koji
                    kažu: Neću na tu mrežu, ne vidim ništa zabavno tamo.
                  </p>
                  <p>
                    Bilo kako bilo, istina je svakako da je reč o mreži koja
                    setuje standarde kojima se prilagođavaju i njeni korisnici,
                    ali i popularne platforme poput Instagrama i Facebooka. A
                    kako stvari stoje, u narednom periodu, TikTok postaje
                    konkurencija svima.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_four_deco_one.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-four-section-two">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7206038743336389934"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-four/volume_four_embed_one.jpg"
              allowFullScreen={true}
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7283213311909367083"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-four/volume_four_embed_two.jpg"
              allowFullScreen={true}
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-four-section-three">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-four"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    As some studies show, 50% of Generation Z uses TikTok as
                    their search engine and prefers to get information there
                    rather than on the Google platform.
                  </p>
                  <p>
                    Does the future give us a sneak peek into new trends? Will
                    Ask Google become Ask TikTok?
                  </p>
                  <p>
                    It’s hard to say. However, after the famous #TikTokMadeMeTry
                    and #TikTokMadeMeBuy, we wouldn’t bet against it.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Kako neka istraživanja pokazuju, 50% Generacije Zed
                    upotrebljava TikTok kao svoj search engine i radije se
                    informiše na ovoj platformi nego na čuvenom Google-u.
                  </p>
                  <p>
                    Da li nam budućnost daje sneak peak u nove trendove? Da li
                    će se Ask Google krilatica pretvoriti u Ask TikTok?
                  </p>
                  <p>
                    Nezahvalno je tvrditi, međutim, nakon čuvenog
                    #TikTokMadeMeTry i #TikTokMadeMeBuy ne bismo se kladili u
                    suprotno.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_four_deco_two.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-four-section-four">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7254683600090713387"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-four/volume_four_embed_three.jpg"
              allowFullScreen={true}
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7246843475566546219"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-four/volume_four_embed_four.jpg"
              allowFullScreen={true}
            />
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-four-section-five"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-four"
            >
              {language === "en-US" ? (
                <>
                  <p>And what does that mean for us? For the brands?</p>
                  <p>
                    Whether a brand decides to be a part of this platform or
                    not, the fact is that fans are probably already mentioning
                    it in their communication. Some by using its hashtags. Some
                    by stitching their videos on the brand’s TVC. And some by
                    using the music from the brand’s commercials.
                  </p>
                  <p>
                    All this is appearing to those who are interested in our
                    brand and want to create an image of it.
                  </p>
                  <p>
                    At the end of the day, the decision is ours whether to build
                    an image of our brand based on the content, we control and
                    create, or based on that over which we have no control.
                  </p>
                </>
              ) : (
                <>
                  <p>A šta to znači za nas? Za brendove?</p>
                  <p>
                    Bilo da se neki brend odluči za prisustvo na ovoj društvenoj
                    mreži, ili ne, činjenica jeste da ga fanovi verovatno već
                    pominju u svojoj komunikaciji. Zaluta tu i tamo neki #,
                    stitch na TVC video ili barem muzika iz njega.
                  </p>
                  <p>
                    Sve ovo će se pojaviti onima koje naš brend zainteresuje i
                    požele da stvore neku sliku o njemu.
                  </p>
                  <p>
                    Na kraju dana, na nama je odluka da li će graditi sliku o
                    našem brendu na osnovu sadržaja koji mi kontrolišemo i
                    stvaramo ili pak na osnovu onog nad kojim nemamo nikakvu
                    kontrolu.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "64rem", height: "72rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_four_deco_three.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeFour;
